import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { getRandomColor } from '../utils/getRandomColor';

const NewReleases = ({ music}) => {
  if (!music) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.collection}>
          <View style={[styles.img]}>
              <Image source={require('../assets/images/NewReleases1.png')} style={{width: 150, height: 150, borderRadius: 10}} />
          </View>
          <Text style={styles.nameMusic}>{music.albumName}</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.nameAuthor}>{music.artist}</Text>
      </View>
    </View>
  )
}

export default NewReleases

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginRight: 12,
        marginTop: 12,
    },

    collection: {
      position: 'relative',
    },

    img: {
        borderRadius: 10,
        borderBottomWidth: 5,
    },

    nameMusic: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    nameAuthor: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 14,
    }
})