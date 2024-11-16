import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
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
        <AntDesign name="search1" size={24} color="white"/>
      </View>
    </TouchableOpacity>
  )
}

export default header

const styles = StyleSheet.create({
  container: {
    marginRight: 4,
  },
  body: {
    color: Colors.neutral.white,
    fontSize: 20,
  }
})