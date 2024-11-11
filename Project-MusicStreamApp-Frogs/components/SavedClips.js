import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';

const SavedClipItem = () => {
    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <View style={styles.icon}>
                    <Ionicons name="play" size={16} color="white" />
                </View>
                <Image source={require('../assets/images/clips-eminem.png')} style={styles.img} />
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0.0)', 'rgba(226, 226, 226,0.6)']}
                    style={styles.avtContainer}
                    >
                    <View style={styles.info}>
                        <Text style={styles.songName}>Lose Yourself</Text>
                        <Text style={styles.authorName}>Eminem</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default SavedClipItem

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginRight: 20,
        position: 'relative',
        width: '47%',
    },
    icon: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: 10,
        borderRadius: '50%',
        fontSize: 16
    },
    img: {
        borderRadius: 10,
        width: '100%',
    },
    info: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        zIndex: 1,
        width: '84%',
    },
    songName: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    authorName: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
    },
    avtContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    }


})