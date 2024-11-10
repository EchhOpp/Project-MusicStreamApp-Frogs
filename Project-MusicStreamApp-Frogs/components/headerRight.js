import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const header = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>
        <FontAwesome style={styles.body} name="search" size={20} color={Colors.neutral.white}/>
      </Text>
    </TouchableOpacity>
  )
}

export default header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  
  body: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    padding: 14,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

})