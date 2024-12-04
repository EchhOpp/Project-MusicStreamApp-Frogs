import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const HerderRight = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity 
            onPress={() => navigation.navigate('Search')}
            style={[styles.icon, styles.iconSearch]}>
            <AntDesign name="search1" size={24} color="white"/>
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