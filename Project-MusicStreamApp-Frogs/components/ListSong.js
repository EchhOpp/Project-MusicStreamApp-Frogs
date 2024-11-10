import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

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
        marginTop: 20,
        marginRight: 20,
        position: 'relative',
    },

    img: {
        borderRadius: 10,
    },
    nameMusic: {
        color: 'white',
        fontSize: 16,
        marginVertical: 5,
    },
    nameAuthor: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
    },
})