import { StyleSheet,Image, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import { Popins} from '@/constants/Popins';

const headerLeft = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../../../assets/images/Profileicon.png')} style={{width: 30, height: 30, borderRadius: 50}}/>
      <View style={styles.body}>
        <Text style={[styles.textName, styles.textBold]}>Thanh Luan</Text>
        <View style={styles.period}>
          <Text style={styles.textTime}>Good Morning</Text>
          <Entypo name="hand" size={12} color="#ffd14a" style={{paddingHorizontal: 4}}/>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default headerLeft

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 4,
    },
    body: {
    },
    textName: {
        color: Colors.neutral.white,
        fontSize: 16,
        marginLeft: 10,
    },
    period: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textTime: {
        color: Colors.neutral.rgba3,
        fontSize: 12,
        marginLeft: 10,
    },
    textBold: {
        fontWeight: Popins.FontFamilies.SemiBold,
        fontFamily: Popins.FontBold,
    }
})