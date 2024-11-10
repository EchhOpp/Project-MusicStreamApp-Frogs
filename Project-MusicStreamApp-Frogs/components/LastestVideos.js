import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

const LastestVideos = () => {
  return (
    <View style={styles.container}>
        <View>
           <TouchableOpacity>
                <Ionicons name="play" size={24} color="white" style={styles.icon}/>
                <Image source={require('../assets/images/lastestvideo1.png')} style={styles.img}/>
                <Text style={styles.time}>
                    6:53
                </Text>
           </TouchableOpacity>
            <View style={styles.name}>
                <Text style={styles.title}>Performing “Training Season”</Text>
            </View>
        </View>
    </View>
  )
}

export default LastestVideos

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginRight: 20,
        position: 'relative',
    },

    img: {
        borderRadius: 10,
    },
    time: {
        position: 'absolute',
        bottom: 18,
        right: 18, 
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 50,
        color: Colors.neutral.white,
        fontSize: 12,
    },
    icon: {
        position: 'absolute',
        top: 18,
        left: 18,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 10,
        borderRadius: 50, 
        fontSize: 16
    },
    title: {
        color: Colors.neutral.white,
        fontSize: Popins.Heading5.size,
        fontWeight: Popins.Heading5.weight,
        marginTop: 10,
    },
})