import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'

const FeaturedOnComponent = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={require('@/assets/images/creepin.png')} style={styles.img} />
        <AntDesign name="downcircleo" size={24} color="#8e9396" style={styles.icon}/>
      </View>
      <View>
        <Text style={[styles.color,styles.font1]}>Creepin’</Text>
        <Text style={[styles.color2,styles.font2]}>Metro Boomin - The Weeknd</Text>
      </View>
    </TouchableOpacity>
  )
}

export default FeaturedOnComponent

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginRight: 20,
        marginTop: 18,
        borderRadius: 10,
    },
    img: {
        width: 160,
        height: 160,
        borderRadius: 10,
    },
    icon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        height: 25,
        width: 25,
    },
    color: {
        color: '#fff',
    },
    color2: {
        color: 'rgba(255, 255, 255, 0.5)',
    },
    font1: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
    font2: {
        fontSize: 14,
        width: 160,
    },
})