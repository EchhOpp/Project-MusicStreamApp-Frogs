import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import Reac, {useEffect, useState} from 'react'

import { LinearGradient } from 'expo-linear-gradient'; 

const PlayList = () => {
  return (
    <View style={styles.container}>
        <LinearGradient
            colors={['#4a1f1d', '#1a1a1a', '#d1b8a3']}
            style={styles.avtContainer}
        >
            <TouchableOpacity style={styles.imgContainer}>
                <Image source={require('@/assets/images/IMG_04251.png')} style={styles.dia}/>
                <Image source={require('@/assets/images/IMG_Playlist.png')} style={styles.avt}/>
            </TouchableOpacity>
        </LinearGradient>
        <View>
            <Text style={styles.nameMusic1}>After Hours</Text>
            <Text style={styles.nameMusic2}>The Weeknd</Text>
        </View>
    </View>
  )
}

export default PlayList

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        marginTop: 20,
    },

    avtContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
    },

    imgContainer: {
        position: 'relative',
        padding: 10,
        paddingRight: 30,
        
    },

    dia: {
        position: 'absolute',
        top: '15%',
        right: '4%',
    },

    avt: {
        borderRadius: 10,
        zIndex: 1,
    },

    nameMusic1: {
        color: '#fff',
        fontSize: 16,
        marginTop: 8,
    },

    nameMusic2: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 14,
    },
})