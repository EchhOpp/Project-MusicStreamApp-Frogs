import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const ListListenMusic = () => {
  return (
    <TouchableOpacity>
        <View></View>
        <View>
            <Ionicons name="play-circle" size={24} color="white" />
        </View>
    </TouchableOpacity>
  )
}

export default ListListenMusic

const styles = StyleSheet.create({})