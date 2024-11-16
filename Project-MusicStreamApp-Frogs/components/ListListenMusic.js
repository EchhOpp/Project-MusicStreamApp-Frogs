import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

const ListListenMusic = (
    {navigation}
) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.music}>
            <Image source={require('@/assets/images/musiccover.png')} style={{width: 52, height: 52}} />
            <View style={styles.textName}>
                <Text style={styles.nameMucsic}>I Can See You</Text>
                <Text style={styles.authour}>Taylor Swift</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
            <Feather name="more-vertical" size={24} color="white" />
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
        marginTop: 16,
    },
    music: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    nameMucsic: {
        color: Colors.neutral.white,
        fontSize: Popins.Heading5.size,
        fontWeight: Popins.FontFamilies.Bold,
    },
    textName: {
        marginLeft: 12,
    },
    
    authour: {
        color: Colors.neutral.rgba3,
        fontSize: 12,
    }
})