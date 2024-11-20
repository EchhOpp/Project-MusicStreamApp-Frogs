import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

const MoodGenres = ({ genre, color }) => {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, { borderColor: color }]}>{genre}</Text>
    </View>
  )
}

export default MoodGenres

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingVertical: 12, 
        paddingHorizontal: 10,
        borderRadius: 10, 
        fontSize: 16,
        width: 120,
    },

    text: {
        color: Colors.neutral.white,
        fontSize: Popins.Heading5.size,
        borderLeftWidth: 3,
        paddingLeft: 10,
        paddingVertical: 4,
    },
})