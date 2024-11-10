import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

const MoodGenres = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>R&B & Soul</Text>
    </View>
  )
}

export default MoodGenres

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginRight: 20,
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingVertical: 12, 
        paddingHorizontal: 10,
        borderRadius: 10, 
        fontSize: 16,
        width: '46%',
    },

    text: {
        color: Colors.neutral.white,
        fontSize: Popins.Heading5.size,
        borderColor: Colors.primary.main,
        borderLeftWidth: 4,
        paddingLeft: 10,
        paddingVertical: 4,
    },
})