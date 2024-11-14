import { FlatList , Text, View, ScrollView,TextInput, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useRef}from 'react'
import styles from './styles/SignInStep1'
import { getGenre, getArtists } from '../../../services/ChooseMusic'


const SignInStep1 = ({ navigation }) => {
    // Khai báo biến cho genre và search
    const [genre, setGenre] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedGenre, setSelectedGenre] = useState([]);
    
    // Khai báo biến cho artist
    const [artists, setArtists] = useState([]);

    // Đăt biến cờ để kiểm tra xem component đã được mount hay chưa
    const isMounted = useRef(true);

    // Lấy genre từ firebase
    useEffect(() => {
        getGenre().then((data) => {
            if (isMounted.current) {
                setGenre(data);
            }
        });
        return () => {
            isMounted.current = false; // Khi component unmount, đặt biến cờ thành false
        };
    }, [isMounted]);

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

    // Lấy artist từ firebase
    useEffect(() => {
        getArtists().then((data) => {
            if (isMounted.current) {
                const flattenedData = data.flat();
                setArtists(flattenedData);
            }
        });

        alert(JSON.stringify(artists)); // Hiển thị dữ liệu dưới dạng chuỗi JSON
        return () => {
            isMounted.current = false; 
        }
    }, []);

    // Lọc danh sách genre dựa trên từ khóa tìm kiếm và nếu có chọn genre hiển thi cả 2 
    const genreFilter = genre.filter((item) => item.toLowerCase().includes(search.toLowerCase()) || selectedGenre.includes(item));
    

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
                    keyExtractor={(item) => item}
                    showsHorizontalScrollIndicator={false}
                    columnWrapperStyle={{ width: '100%'}}
                />
            </View>
            <View style={styles.choose1}>
                <Text style={[styles.fonttext24, styles.Artists]}>Artists</Text>
                {/* Sổ list Artits */}
                    <FlatList
                        scrollEnabled={false}
                        data={artists}
                        numColumns={3}
                        keyExtractor={item => item.id + Math.random()}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.itemAva}>
                                <Image 
                                    source={{uri: 'https://drive.google.com/uc?export=view&id=11mVNq-KG2ZeD3WXU4f8PSJoVQ5Uappnr'}} 
                                    style={styles.avaImage} 
                                />
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
                    onPress={() => navigation.navigate('SignInStep2')}
                >
                    <Text style={[styles.fonttext16, styles.colortext]}>Get started </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>
    )
}

export default SignInStep1
