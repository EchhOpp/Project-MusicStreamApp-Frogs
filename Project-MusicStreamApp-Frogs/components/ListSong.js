import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { Popins } from '../constants/Popins'

const ListSong = () => {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/afterhours.png')} style={styles.img}/>
        <Text style={styles.nameMusic}>After hours</Text>
        <Text style={styles.nameAuthor}>The Weeknd</Text>
    </View>
  )
}

export default ListSong

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginRight: 20,
        position: 'relative',
    },

    img: {
        borderRadius: 10,
    },
    nameMusic: {
        color: Colors.neutral.white,
        fontSize: 14,
        marginVertical: 4,
    },
    nameAuthor: {
        color: Colors.neutral.rgba3,
        fontSize: 12,
        marginTop: -2
    },
})