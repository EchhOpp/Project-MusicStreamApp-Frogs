import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';

const header = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('Search')}
    >
      <View style={styles.text}>
        <Ionicons name="search" size={24} color={'white'}/>
      </View>
    </TouchableOpacity>
  )
}

export default header

const styles = StyleSheet.create({
  container: {
  },
  text: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 50,
  },
  body: {
    color: Colors.neutral.white,
    fontSize: 20,
  }
})