import { FlatList , Text, View, ScrollView,TextInput, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect}from 'react'
import styles from './styles/SignInStep1'
import { getGenre } from '../../../services/ChooseMusic'


const SignInStep1 = ({ navigation }) => {
    const [genre, setGenre] = useState([]);
    const [search, setSearch] = useState('');
    
    // Lấy genre từ firebase
    useEffect(() => {
        getGenre().then((data) => {
            setGenre(data);
        });
    }, [navigation]);

    // Lọc danh sách genre dựa trên từ khóa tìm kiếm
    const genreFilter = search === '' ? genre : genre.filter((item) => item.toLowerCase().includes(search.toLowerCase()));
    
    const artists = [
        { key: 'The Weeknd' },
        { key: 'Drake' },
        { key: 'Kanye West' },
        { key: 'Kendrick Lamar' },
        { key: 'Frank Ocean' },
        { key: 'Beyonce' },
        { key: 'Rihanna' },
        { key: 'Ariana Grande' },
        { key: 'Taylor Swift' },
        { key: 'Billie Eilish' },
        { key: 'Lady Gaga' },
        { key: 'SZA' },
    ];

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
                <FlatList
                    scrollEnabled={false}
                    style={{ flex: 1 }}
                    data={genreFilter}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.litsItem}>
                            <Text style={[styles.fonttext16, styles.itemN]}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    numColumns={3}
                    keyExtractor={(item) => item}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.choose1}>
                <Text style={[styles.fonttext24, styles.Artists]}>Artists</Text>
                {/* Sổ list Artits */}
                <FlatList
                    scrollEnabled={false}
                    data={artists}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemAva}>
                            <Image source={require('../../../assets/images/avtArtists.png')} style={styles.avaImage} />
                            <Text style={[styles.fonttext14, styles.colortext]}>{item.key}</Text>
                        </TouchableOpacity>
                        
                    )}
                    keyExtractor={item => item.key}
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
