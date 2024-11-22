import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'
import { Ionicons } from '@expo/vector-icons'

const HerderRight = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.icon, styles.iconSearch]}>
            <Ionicons name="search" size={24} color={'white'}/>
        </TouchableOpacity>
    </View>
  )
}

export default HerderRight

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center', 
    },
    
    icon: {
        color: Colors.neutral.white,
        marginLeft: 10,
    },
    
    icon: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 8,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.neutral.white,
    },
    iconSearch: {
        marginHorizontal: 12,
    }
})