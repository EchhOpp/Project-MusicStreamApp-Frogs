import { View, Text, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import styles from './style/PlayLists'
import Playlists from './ComponentPlay'
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome từ @expo/vector-icons

const PlayLists = () => {
  return (
    <View style={styles.container}>
        <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Listen again</Text>
            <View style={styles.iconbars}>
              <TouchableOpacity style={styles.btnMore}>
                <FontAwesome name="sliders" size={14} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnMore}>
                <FontAwesome name="bars" size={14} color="white" />
              </TouchableOpacity>
            </View>
        </View>
        <View style={styles.listPlay}>
        {/* Sổ Playlist */}
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <Playlists item={item} />}
            keyExtractor={item => item.toString()}
            numColumns={2} 
            columnWrapperStyle={styles.row} 
          />
        </View>
    </View>
  )
}

export default PlayLists