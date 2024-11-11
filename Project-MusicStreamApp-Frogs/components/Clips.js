import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Clips = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.icon}>
            <Ionicons name="play" size={16} color="white"/>
        </View>
        <Image source={require('../assets/images/clipstheweeknd.png')} style={styles.img}/>
        <View style={styles.name}>
            <Text style={styles.nameMusic}>Performing “The Hills”</Text>
            <Text style={styles.nameAuthor}>The Weeknd</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Clips

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginRight: 20,
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
        borderRadius: 50, 
        fontSize: 16
    },
    img: {
        borderRadius: 10,
    },
    name: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        zIndex: 1,
        width: '84%',
    },
    nameMusic: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    nameAuthor: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
    },

})