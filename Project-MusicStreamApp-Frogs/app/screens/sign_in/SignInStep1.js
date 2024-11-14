import { FlatList , Text, View, ScrollView,TextInput, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useRef}from 'react'
import styles from './styles/SignInStep1'
import { Ionicons } from '@expo/vector-icons'


// Services Firebase
import { getGenre, getArtists, saveGenreAndArtists, getCurrentUser } from '../../../services/ChooseMusic'


const SignInStep1 = ({ navigation }) => {
    // Khai báo biến cho genre và search
    const [genre, setGenre] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    // Khai báo biến cho artist
    const [artists, setArtists] = useState([]);
    const [selectedArtists, setSelectedArtists] = useState([]);
    // Lấy tên các artist đã chọn 
    const [artistName, setArtistName] = useState([]); 

    // Đăt biến cờ để kiểm tra xem component đã được mount hay chưa
    const isMounted = useRef(true);

    // Lấy dữ liệu genre từ API hoặc Firebase
    useEffect(() => {
        if(!isLoaded) {
            getGenre().then((data) => {
                if (isMounted.current) {
                    setGenre(data);
                    setIsLoaded(true);
                }
            });
    
            // Lấy dữ liệu artist từ API hoặc Firebase
            getArtists().then((data) => {
                if (isMounted.current) {
                    // Dùng flat() để làm phẳng mảng 2 chiều
                    const flattenedData = data.flat();
                    if (flattenedData.length > 0) setArtists(flattenedData);
                }
            });
        }

        // Cleanup khi component unmount
        return () => {
            isMounted.current = false;
        };
    }, [isLoaded]);
    

    // Hiển thị genre đã chọn
    const handleSelectGenre = (item) => {
        // Nếu genre đã được chọn thì bỏ chọn, ngược lại thì thêm vào mảng genre đã chọn
        if (selectedGenre.includes(item)) {
            setSelectedGenre(selectedGenre.filter((genre) => genre !== item));
        } 
        // Nếu genre chưa được chọn thì thêm vào mảng genre đã chọn
        else {
            setSelectedGenre([...selectedGenre, item]);
        }
    };

    // Hiển thị artist đã chọn
    const handleSelectArtists = (item) => {
        // Nếu artist đã được chọn thì bỏ chọn, ngược lại thì thêm vào mảng artist đã chọn
        if (selectedArtists.includes(item)) {
            setSelectedArtists(selectedArtists.filter((artist) => artist !== item));
        }
        // Nếu artist chưa được chọn thì thêm vào mảng artist đã chọn
        else {
            setSelectedArtists([...selectedArtists, item]);
        }
    };

    // Lọc danh sách genre dựa trên từ khóa tìm kiếm và nếu có chọn genre hiển thi cả 2 và loc theo artist
    const genreFilter = genre.filter((item) => item.toLowerCase().includes(search.toLowerCase()) || selectedGenre.includes(item));
    const artistFilter = artists.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || selectedArtists.includes(item));

    // Lấy tên các artist đã chọn
    useEffect(() => {
        setArtistName(selectedArtists.map((artist) => artist.name));
    }, [selectedArtists]);
    
    return (
        <View style={styles.container} >
            <ScrollView style={styles.scrollContainer} 
            showsVerticalScrollIndicator={false}
            >
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.steps}>
                    <View style={styles.step}></View>
                    <View style={styles.step}></View>
                </View>
                <Text style={[styles.fonttext24, styles.txtHeader]}>Choose your genre and artist you like.</Text>
            </View>
            {/* Choose */}
            <View style={styles.choose1}>
                <TextInput 
                    style={[styles.fonttext16, styles.txtInput]} 
                    placeholder='Search Genre or Artist' 
                    placeholderTextColor='rgba(255, 255, 255, 0.8)' 
                    value={search}
                    onChangeText={(text) => setSearch(text)}
                    />

                {/* Select Genre */}
                <FlatList
                    scrollEnabled={false}
                    data={genreFilter}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={[styles.litsItem, selectedGenre.includes(item) && styles.itemSelect]}
                            onPress={() => handleSelectGenre(item)}
                        >
                            <Text style={[styles.fonttext16, styles.itemN]}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    numColumns={3}
                    keyExtractor={(item) => Math.random().toString() + item}
                    showsHorizontalScrollIndicator={false}
                    columnWrapperStyle={{ width: '100%'}}
                />
            </View>
            <View style={styles.choose1}>
                <Text style={[styles.fonttext24, styles.Artists]}>Artists</Text>
                {/* Sổ list Artits */}
                    <FlatList
                        scrollEnabled={false}
                        data={artistFilter}
                        numColumns={3}
                        keyExtractor={item => item.id + Math.random()}
                        renderItem={({ item }) => (
                            <TouchableOpacity 
                                style={styles.itemAva}
                                onPress={() => handleSelectArtists(item)}
                            >
                                <View style={styles.avaImageContainer}>
                                    <Image 
                                        source={{uri: item.image}} 
                                        style={[styles.avaImage, selectedArtists.includes(item) && styles.itemSelect]} 
                                    />
                                    <View style={styles.checkIconContainer}>
                                        <Ionicons
                                            name='checkmark-circle' 
                                            size={18}
                                            color={selectedArtists.includes(item) ? '#DF3131' : 'transparent'} 
                                            style={styles.checkIcon}
                                        />
                                    </View>
                                </View>
                                <Text style={[styles.fonttext14, styles.colortext]}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        showsHorizontalScrollIndicator={false}
                    />
            </View>

            {/* 
                                    // navigation.reset({
                    //     index: 0, // Đặt chỉ mục màn hình hiện tại
                    //     routes: [{ name: 'SignInStep2' }], // Đặt màn hình SignInStep1 là màn hình duy nhất
                    // }); }
             */}
            <View>
                <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        saveGenreAndArtists(getCurrentUser(), selectedGenre, artistName);
                        navigation.navigate('SignInStep2');
                    }}
                >
                    <Text style={[styles.fonttext16, styles.colortext]}>Get started </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

export default SignInStep1
