import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

const SearchHeaderLeft = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={20} color={Colors.neutral.white} />
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
  }
})