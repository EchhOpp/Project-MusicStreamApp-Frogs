import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './styles/GetStartCount';
import { FontAwesome } from '@expo/vector-icons';

const GetStartCount = (
  { navigation }
) => {
  return (
    <ImageBackground 
      source={require('./images/background_sign.png')}
      style={styles.container}
    >
      <View style={styles.body}>
        <View >
          <TouchableOpacity style={styles.btn_login}
            onPress={() => navigation.navigate('SignIn') }
          >
            <Text style={styles.text}>Sign in</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.btn}
           onPress={() => navigation.navigate('SignUp') }
          >
            <Text style={styles.text}>Sign up for free</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.layout}>
          <Text style={styles.colorLayout}>
            _____________
          </Text>
          <Text style={styles.colorLayout}>
            Or continue with
          </Text>
          <Text style={styles.colorLayout}>
            _____________
          </Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.btnLoginWith}>
            <TouchableOpacity>
              <View style={styles.touchLogin}>
                <FontAwesome name="google" style={[styles.text, styles.hor]}/>
                <Text style={styles.text}>Google</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.btnLoginWith}>
            <TouchableOpacity>
              <View style={styles.touchLogin}>
                <FontAwesome name="apple" style={[styles.text, styles.hor]}/>
                <Text style={styles.text}>Apple</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStartCount;