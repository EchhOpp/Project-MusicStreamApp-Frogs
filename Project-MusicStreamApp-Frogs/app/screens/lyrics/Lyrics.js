import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground, Positioned, Container, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import styles from './style/Lyrics';



const Lyrics = () => {
    return (
        <ImageBackground
            source={require('../../../assets/images/Imgtheme2.png')}
            style={styles.container}
        >
            <LinearGradient
                colors={['rgba(59, 62, 53,0.9)', 'rgba(24,21,16,1)', 'rgba(150,150,150,0.8)']}
                style={styles.gradientOverlay}
            >
                <View style={styles.Container}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.btndown}>
                            <AntDesign name="down" size={24} color="white" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    {/* Add more content here as needed */}
                    <ScrollView style={styles.lyricsContainer}>
                        <Text style={styles.lyricsText}>Well, I don't wanna touch the sky no more</Text>
                        <Text style={styles.lyricsTextMain}>I just wanna feel the ground when I'm coming down</Text>
                        <Text style={styles.lyricsText}>It's been way too long</Text>
                        <Text style={styles.lyricsText}>And I don't even wanna get high no more</Text>
                        <Text style={styles.lyricsText}>Just want it out of my life</Text>
                        <Text style={styles.lyricsText}>Out of my life, out</Text>
                        <Text style={styles.lyricsText}>Just want it out of my life</Text>
                        <Text style={styles.lyricsText}>Out of my life, out</Text>
                        <Text style={styles.lyricsText}>Just want it out of my life</Text>
                        <Text style={styles.lyricsText}>Out of my life, out</Text>
                        
                    </ScrollView>
                </View>
            </LinearGradient>
        </ImageBackground>
    )
}

export default Lyrics

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     gradientOverlay: {
//         flex: 1,
//     },
//     Container: {
//         marginHorizontal: 20,
//         marginTop: 40
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20
//     },
//     btndown: {
//         padding: 10,
//         backgroundColor: 'rgba(255,255,255,0.2)',
//         borderRadius: 50
//     },
//     list: {
//         height: 500
//     },
//     lyricsContainer: {
//         marginTop: 20,
//         marginHorizontal: 10,
//         height: 500
//     },
//     lyricsText: {
//         color: 'white',
//         fontSize: 22,
//         fontWeight: '500',
//         opacity: 0.5,  // Làm mờ các lyrics thường
//         marginVertical:5
//     },
//     lyricsTextMain: {
//         color: 'white',
//         fontSize: 22,  // Có thể tăng size chữ
//         fontWeight: '700',  // Tăng độ đậm
//         opacity: 1,    // Hiện rõ hoàn toàn
//         marginVertical:5
//     },

//     scrollContainer: {
//         flex: 1,
//         position: 'relative',
//     },
//     linearGradientDown: {
//         position: 'absolute',
//         top: 0,
//         left: -20,
//         right: -20,
//         height: 50,
//         zIndex: 1,
//         height: 500
//     }

// })