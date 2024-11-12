import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles/GetStart';

const GetStart = (
  { navigation }
) => {
  return (
    <ImageBackground 
      source={require('../../../assets/images/background_sign.png')} 
      style={styles.container}
    >
      <View style={styles.body}>
        <View style={styles.context}>
          <Text style={[styles.colortext, styles.fonttext30]} >Open</Text>
          <Text style={[styles.colortext, styles.fonttext30]}>the world of music</Text>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('GetStartCount') }>
          <Text style={[styles.colortext, styles.fonttext18]}>Get started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GetStart;