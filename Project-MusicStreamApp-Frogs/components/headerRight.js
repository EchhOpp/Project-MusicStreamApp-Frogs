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
      <View style={styles.icon}>
        <FontAwesome style={styles.body} name="search" size={20} color={Colors.neutral.white} />
      </View>
    </TouchableOpacity>
  )
}

export default header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 60,
  },
  icon:{
    padding: 12,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  body: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

})