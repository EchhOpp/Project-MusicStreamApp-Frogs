import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'
import styles from './styles/SignIn'

const SignIn = (
    { navigation }
) => {
    const [userName, setUserName] = useState("")
    const [passWord, setPassWord] = useState("")
    const [userNameBorderColor, setUserNameBorderColor] = useState('#7e7e7e');
    const [passwordBorderColor, setPasswordBorderColor] = useState('#7e7e7e');
    const [showError, setShowError] = useState(false);

    const handleSignIn = () => {
        let valid = true
        if (userName.trim() === "") {
            setUserNameBorderColor('#fb4343');
            valid = false;
        } else {
            setUserNameBorderColor('#7e7e7e');
        }
        if (passWord.trim() === "") {
            setPasswordBorderColor('#fb4343');
            valid = false;
        } else {
            setPasswordBorderColor('#7e7e7e');
        }
        if (valid) {
            navigation.navigate('SignInStep1');
            setShowError(false)
            
        }else {
            setShowError(true)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={styles.viewInputs}>
                    <TextInput
                        style={[styles.input, { borderColor: userNameBorderColor }]}
                        onChangeText={(text) => { setUserName(text) }}
                        placeholder="Username or Email address"
                        placeholderTextColor='#7e7e7e' //{borderColor ==='#7e7e7e'?'#7e7e7e':'#d42424'}
                    />
                    <TextInput
                        style={[styles.input,{borderColor:passwordBorderColor}]}
                        onChangeText={(text) => { setPassWord(text) }}
                        placeholder="Password"
                        placeholderTextColor="#7e7e7e" />
                    {showError && (<View style={styles.viewerror}>
                        <Image style={styles.imgerror} source={require('../../../assets/images/Information-circle.png')}/>
                        <Text style={[styles.txterror]}>Username or Password is null</Text>
                    </View>
                    )}


                    <TouchableOpacity style={styles.btn}
                        onPress={() => {
                            handleSignIn()
                        }}
                    >
                        <Text style={[styles.colortext2, styles.fonttext16]}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={[styles.colortext, styles.fonttext16]}>Forget password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.footerText}>
                    <Image source={require('../../../assets/images/Line24.png')} style={styles.footerImg} />
                    <Text style={[styles.colortext, styles.fonttext14]}>Don't have an account?</Text>
                    <Image source={require('../../../assets/images/Line24.png')} style={styles.footerImg} />
                </View>
                <TouchableOpacity style={styles.btn}
                    onPress={() => navigation.navigate('SignUp')}
                >
                    <Text style={[styles.colortext, styles.fonttext16, styles.boldtext]}>Sign up for free </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default SignIn

// const styles = StyleSheet.create({})