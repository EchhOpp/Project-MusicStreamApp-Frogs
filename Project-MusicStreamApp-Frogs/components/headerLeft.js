import { StyleSheet,Image, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';

const headerLeft = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../assets/images/Profileicon.png')}/>
      <View style={styles.body}>
        <Text style={[styles.text, styles.textBold]}>Thanh Luan</Text>
        <Text style={styles.text}>Good morning
            <Entypo name="hand" size={18} color="#ffd14a" style={{marginHorizontal: 4}}/>
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default headerLeft

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
    },
    text: {
        color: Colors.neutral.white,
        fontSize: 18,
        marginLeft: 10,
    },
    textBold: {
        fontWeight: 'bold',
    }
})