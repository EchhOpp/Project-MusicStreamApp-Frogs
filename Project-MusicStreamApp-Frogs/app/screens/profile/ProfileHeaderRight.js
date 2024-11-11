import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

const ProfileHeaderRight = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.icon, styles.iconSearch]}>
                <Ionicons name="search" size={24} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} >
                <FontAwesome name="bell" size={24} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} >
                <Ionicons name="ellipsis-vertical" size={24} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default ProfileHeaderRight

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginHorizontal: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 8,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})