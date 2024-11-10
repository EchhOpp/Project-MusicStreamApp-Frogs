import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'
import { Ionicons } from '@expo/vector-icons'

const RightLibrary = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Ionicons name="search" size={24} style={[styles.icon, styles.iconSearch]} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Ionicons name="add" size={24} style={styles.icon} />
        </TouchableOpacity>
    </View>
  )
}

export default RightLibrary

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20, 
    },
    
    icon: {
        color: Colors.neutral.white,
        marginLeft: 20
    },
    
    icon: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 12,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.neutral.white,
    },
    iconSearch: {
        marginHorizontal: 8,
    }
})