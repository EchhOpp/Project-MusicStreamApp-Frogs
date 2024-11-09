import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

const ListListenMusic = (
    {navigation}
) => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.music}>
            <Image source={require('@/assets/images/musiccover.png')}/>
            <View style={styles.textName}>
                <Text style={styles.nameMucsic}>I Can See You</Text>
                <Text style={styles.authour}>Taylor Swift</Text>
            </View>
        </View>
        <View>
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </View>
    </TouchableOpacity>
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
        fontSize: Popins.Heading6.size,
        fontWeight: 'bold',
    },
    textName: {
        marginLeft: 10,
    },
    
    authour: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 14,
    }
})