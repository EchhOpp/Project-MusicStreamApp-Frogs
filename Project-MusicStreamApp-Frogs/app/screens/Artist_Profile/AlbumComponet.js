import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import Reac, {useEffect, useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient'; 


const AlbumComponet = ({items}) => {
  return (
    <View style={styles.container}>
        <LinearGradient
            colors={['#4a1f1d', '#1a1a1a', '#d1b8a3']}
            style={styles.avtContainer}
        >
            <TouchableOpacity style={styles.imgContainer}>
                <Image source={require('@/assets/images/IMG_04251.png')} style={styles.dia}/>
                {/* <Image source={require('@/assets/images/IMG_Playlist.png')} style={styles.avt}/> */}
                <Image source={{uri:items.image}} style={styles.avt}/>
            </TouchableOpacity>
        </LinearGradient>
        <View>
            <Text style={styles.nameMusic1}>{items.key}</Text>
            <Text style={styles.nameMusic2}>{items.artist}</Text>
        </View>
    </View>
  )
}

export default AlbumComponet

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: 160,
        marginRight: 20,
    },

    avtContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
    },

    imgContainer: {
        position: 'relative',
        paddingHorizontal: '12%',
        paddingVertical: '12%',
        paddingRight: 20,
        
    },

    dia: {
        position: 'absolute',
        top: '26%',
        right: '12%',
    },

    avt: {
        borderRadius: 10,
        zIndex: 1,
    },

    nameMusic1: {
        color: '#fff',
        fontSize: 16,
        marginTop: 8,
        marginVertical:5
    },

    nameMusic2: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 14,
    },
})