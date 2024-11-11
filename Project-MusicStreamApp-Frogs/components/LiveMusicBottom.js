import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'


const LiveMusicBottom = () => {
  return (
     <LinearGradient style={styles.container}
        colors={['#4a1f1d', '#1a1a1a']}
    >
        <TouchableOpacity style={styles.music}>
            <Image source={require('../assets/images/afterhoursLive.png')} />
            <View style={styles.textName}>
                <Text style={styles.nameMusic}>Until I Bleed Out</Text>
                <Text style={styles.nameAuthor}>The Weeknd</Text>
            </View>
        </TouchableOpacity>
        <View style={styles.iconLive}>
            <TouchableOpacity>
                <Ionicons name="play-back" size={18} color={Colors.neutral.white} style={styles.iconplayback}/>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.iconplay}>
                <Ionicons name="play" size={24} color={Colors.neutral.white}/>
            </TouchableOpacity>
        </View>
    </LinearGradient>
  )
}

export default LiveMusicBottom

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        borderRadius: 18,
        width: '100%',
        paddingVertical: 10,
    },

    music: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 8,
    },

    textName: {
        marginLeft: 12,
    },

    nameMusic: {
        color: 'white',
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 5,
    },

    nameAuthor: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 12,
    },

    iconLive: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconplayback: {
        marginRight: 28,
    },

    iconplay: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 12,
        borderRadius: 50,
        marginRight: 12,
    }
})