import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput} from 'react-native'
import React from 'react'
import styles  from './styles/SignIn'

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.navigateLeft}>
                    <Image source={require('../../assets/images/Chevron-Left.png')} />
                    <Text style={[styles.colortext, styles.boldtext, styles.fonttext16]}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu3}>
                    <Image source={require('../../assets/images/Menu-3.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.viewInputs}>
                    <TextInput style={[styles.input]} placeholder="Username or Email address" placeholderTextColor="#7e7e7e" />
                    <TextInput style={[styles.input]} placeholder="Password" placeholderTextColor="#7e7e7e" />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={[styles.colortext2, styles.fonttext16]}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={[styles.colortext, styles.fonttext16]}>Forget password?</Text>
                    </TouchableOpacity>
                    
                </View>

            </View>
            <View style={styles.footer}>
                <View style={styles.footerText}>
                    <Image source={require('../../assets/images/Line24.png')} style={styles.footerImg} />
                    <Text style={[styles.colortext, styles.fonttext14]}>Don't have an account?</Text>
                    <Image source={require('../../assets/images/Line24.png')} style={styles.footerImg} />
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={[styles.colortext, styles.fonttext16,styles.boldtext]}>Sign up for free</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
  )
}

export default SignIn

// const styles = StyleSheet.create({})