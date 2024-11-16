import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

const ListListenMusic = (
    {navigation}
) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.music}>
            <Image source={require('@/assets/images/musiccover.png')} style={{width: 50, height: 50}} />
            <View style={styles.textName}>
                <Text style={styles.nameMucsic}>I Can See You</Text>
                <Text style={styles.authour}>Taylor Swift</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
    </View>
  )
}

export default ListListenMusic

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 18,
    },
    music: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    nameMucsic: {
        color: Colors.neutral.white,
        fontSize: Popins.Heading5.size,
        fontWeight: 'bold',
    },
    textName: {
        marginLeft: 10,
    },
    
    authour: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 12,
    }
})