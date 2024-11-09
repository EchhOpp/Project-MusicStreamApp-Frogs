import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'
import styles  from './styles/SignUp'

const SignUp = (
    { navigation }
) => {
  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={styles.viewInputs}>
                    <TextInput style={[styles.input]} placeholder="Email address" placeholderTextColor="#7e7e7e" />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={[styles.colortext2, styles.fonttext16]}>Sign up for free</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.footer}>
                <View style={styles.footerText}>
                    <Image source={require('../../../assets/images/Line24.png')} style={styles.footerImg} />
                    <Text style={[styles.colortext, styles.fonttext14]}>Already have an account?</Text>
                    <Image source={require('../../../assets/images/Line24.png')} style={styles.footerImg} />
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.navigate('SignIn') }
                >
                    <Text style={[styles.colortext, styles.fonttext16,styles.boldtext]}>Sign in</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
  )
}

export default SignUp

// const styles = StyleSheet.create({})