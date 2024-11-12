import { FlatList , Text, View, ScrollView,TextInput, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect}from 'react'
import styles from './styles/SignInStep1'


const SignInStep1 = ({ navigation }) => {
    const genre = [
        { key: 'Hip-hop' },
        { key: 'R&B' },
        { key: 'Alternative' },
        { key: 'Pop' },
        { key: 'Rock' },
        { key: 'Electronic' },
        { key: 'Country' },
        { key: 'Classical' },
        { key: 'Jazz' },
        { key: 'Blues' },
        { key: 'House' },
        { key: 'Experimental' },
    ];
    
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
            <ScrollView style={styles.scrollContainer}>
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
                <TextInput style={[styles.fonttext16, styles.txtInput]} placeholder='Search Genre or Artist' placeholderTextColor='rgba(255, 255, 255, 0.8)' />
                <FlatList
                    nestedScrollEnabled={true} 
                    style={{ flex: 1 }}
                    data={genre}
                    renderItem={({ item }) => (
                        <View style={styles.litsItem}>
                            <TouchableOpacity >
                                <Text style={[styles.fonttext16, styles.itemN]}>{item.key}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    numColumns={3}
                    keyExtractor={item => item.key}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.choose1}>
                <Text style={[styles.fonttext24, styles.Artists]}>Artists</Text>
                {/* Sổ list Artits */}
                <FlatList
                    nestedScrollEnabled={true}
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
