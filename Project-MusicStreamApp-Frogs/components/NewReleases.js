import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const NewReleases = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../assets/images/NewReleases1.png')}/>
      </TouchableOpacity>
      <View>
        <Text style={styles.nameMusic}>Wonderland</Text>
        <Text style={styles.nameAuthor}>Taylor Swift</Text>
      </View>
    </View>
  )
}

export default NewReleases

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginRight: 20,
        marginTop: 20,
    },
    nameMusic: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    nameAuthor: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 16,
    }
})