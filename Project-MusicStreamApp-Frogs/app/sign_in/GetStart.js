import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles/GetStart';

const Home = () => {
  return (
    <ImageBackground 
      source={require('../../assets/images/background_sign.png')} 
      style={styles.container}
    >
      <View style={styles.body}>
        <View style={styles.context}>
          <Text style={[styles.colortext, styles.fonttext30, styles.boldtext]} >Open</Text>
          <Text style={[styles.colortext, styles.fonttext30, styles.boldtext]}>the world of music</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={[styles.colortext, styles.fonttext18]}>Get Start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Home;