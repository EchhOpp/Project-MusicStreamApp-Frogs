import { StyleSheet,Image, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/Entypo';

const headerLeft = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../assets/images/Profileicon.png')} style={{ width: 50, height: 50 }} />
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
        flex: 1,
        backgroundColor: Colors.neutral.gray,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        paddingVertical: 10,
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