import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'
import styles  from './styles/SignUp'

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.navigateLeft}>
                    <Image source={require('../../assets/images/Chevron-Left.png')} />
                    <Text style={[styles.colortext, styles.boldtext, styles.fonttext16]}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu3}>
                    <Image source={require('../../assets/images/Menu-3.png')} />
                </TouchableOpacity>
            </View>
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
                    <Image source={require('../../assets/images/Line24.png')} style={styles.footerImg} />
                    <Text style={[styles.colortext, styles.fonttext14]}>Already have an account?</Text>
                    <Image source={require('../../assets/images/Line24.png')} style={styles.footerImg} />
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={[styles.colortext, styles.fonttext16,styles.boldtext]}>Sign in</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
  )
}

export default SignUp

// const styles = StyleSheet.create({})