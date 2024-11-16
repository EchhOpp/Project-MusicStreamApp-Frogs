import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'


const LiveMusicBottom = () => {
  return (
     <View style={styles.container}>
        <TouchableOpacity style={styles.music}>
            <Image source={require('../assets/images/afterhoursLive.png')} style={{width: 40, height: 40, borderRadius: 4}}/>
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
    </View>
  )
}

export default LiveMusicBottom

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderRadius: 8,
        width: '98%',
        backgroundColor: '#242328',
        marginVertical: 0,
        padding: 2,
        borderBottomColor: 'rgb(238, 238, 238)',
        borderBottomWidth: 1,
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
        color:  Colors.neutral.white,
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 2,
    },

    nameAuthor: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
    },

    iconLive: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconplayback: {
        borderRadius: 18,
        padding: 12,
    },

    iconplay: {
        borderRadius: 18,
        padding: 12,
    },
})