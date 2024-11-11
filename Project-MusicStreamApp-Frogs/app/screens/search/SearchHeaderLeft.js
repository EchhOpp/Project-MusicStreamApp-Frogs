import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'


const SearchHeaderLeft = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('@/assets/images/Profileicon.png')} style={styles.avt}/>
      </TouchableOpacity>
      <Text style={styles.nameFunc}>Search</Text>
    </View>
  )
}

export default SearchHeaderLeft

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  nameFunc: {
    color: Colors.neutral.white,
    fontSize: Popins.Heading4.size,
    fontWeight: 'bold',
    marginLeft: 10
  },
})