import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/SavedClips'
import { FontAwesome } from '@expo/vector-icons'
import { FlatList } from 'react-native-web'
import SavedClipItem from '../../../components/SavedClips'
import LiveMusicBottom from '@/components/LiveMusicBottom'

const SavedClips = () => {
  return (
    <View style={styles.container}>
        <View style={styles.titles}>
            <Text style={[styles.Color, styles.textH1]}>Saved Clips</Text>
            <TouchableOpacity style={styles.btnFilter}>
                <FontAwesome name="sliders" size={24} color="white"/>
            </TouchableOpacity>
        </View>
        <FlatList
            style={styles.bodyContent}
            data={[1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]}
            renderItem={({ item }) => <SavedClipItem />}
            keyExtractor={item => item.toString()}
            numColumns={'2'}
        />
        <View style={styles.bottomNav}>
            <LiveMusicBottom />
        </View>
    </View>
  )
}
export default SavedClips
