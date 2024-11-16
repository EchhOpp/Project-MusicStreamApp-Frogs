import {Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native'
import React, {useState} from 'react'
import { MaterialIcons, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'
import styles  from './styles/SignUp'
import signUpUser from '../../../services/AuthSignUp'

const SignUpEmail = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [enterPassword, setEnterPassword] = useState("");
    const [userNameBorderColor, setUserNameBorderColor] = useState('#7e7e7e');
    const [emailBorderColor, setEmailBorderColor] = useState('#7e7e7e');
    const [passwordBorderColor, setPasswordBorderColor] = useState('#7e7e7e');
    const [enterPasswordBorderColor, setEnterPasswordBorderColor] = useState('#7e7e7e');
    const [showError, setShowError] = useState(false);

    const handleSignUp = () => {
        let valid = true;
        
        // Check username
        if (userName.trim() === "") {
            setUserNameBorderColor('#fb4343');
            valid = false;
        } else {
            setUserNameBorderColor('#7e7e7e');
        }

        // Check email regex
        if (email.trim() === "" || !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            setEmailBorderColor('#fb4343');
            valid = false;
        } else {
            setEmailBorderColor('#7e7e7e');
        }

        // check password and enter password
        if (passWord !== enterPassword || passWord.trim() === "" || enterPassword.trim() === "") {
            setPasswordBorderColor('#fb4343');
            setEnterPasswordBorderColor('#fb4343');
            valid = false;
            if (passWord !== enterPassword) {
                Alert.alert("Password","Password and confirm password must be the same");
            }
        } else {
            setPasswordBorderColor('#7e7e7e');
            setEnterPasswordBorderColor('#7e7e7e');
        }

        // If all fields are valid, navigate to SignIn screen
        if (valid) {
            signUpUser(userName, email, passWord).then(
                (user) => {
                    console.log('User signed up:', user);
                    navigation.navigate('SignIn',
                        { email: email, password: passWord }
                    );
                    setShowError(false);
                }
            ).catch(
                (error) => {
                    setShowError(true);
                    alert("Error: " + error);
                }
            );
        } else {
            setShowError(true);
        }
    };

    return (
    <TouchableWithoutFeedback>
        <SafeAreaView style={styles.container}>
            <View style={styles.body}>
                <View style={styles.viewInputs}>
                    <View style={[styles.textInput, { borderColor: userNameBorderColor }]}>
                        <FontAwesome name="user" size={24} color="white" style={[styles.icon, {marginHorizontal: 3, marginRight: 14}]}/>
                        <TextInput 
                            style={[styles.input]} 
                            placeholder="Username" placeholderTextColor="#7e7e7e" 
                            onChangeText={(text) => { 
                                setUserName(text);
                                setUserNameBorderColor('#7e7e7e')
                            }}
                        />
                    </View>
                    <View style={[styles.textInput, { borderColor: emailBorderColor }]}>
                        <MaterialIcons name="email" size={24} color="white" style={styles.icon}/>
                        <TextInput 
                            style={[styles.input]} 
                            placeholder="Email" placeholderTextColor="#7e7e7e" 
                            onChangeText={(text) => { 
                                setEmail(text);
                                setEmailBorderColor('#7e7e7e')
                            }}
                        />
                    </View>
                    <View style={[styles.textInput, { borderColor: passwordBorderColor }]}>
                    <MaterialCommunityIcons name="lock" size={24} color="white" style={styles.icon}/>
                        <TextInput 
                            style={[styles.input]} 
                            placeholder="Password" placeholderTextColor="#7e7e7e" 
                            onChangeText={(text) => { 
                                setPassWord(text);
                                setPasswordBorderColor('#7e7e7e')
                            }}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={[styles.textInput, { borderColor: enterPasswordBorderColor }]}>
                    <MaterialCommunityIcons name="lock-check" size={24} color="white" style={styles.icon}/>
                        <TextInput 
                            style={[styles.input]} 
                            placeholder="Re-enter password" placeholderTextColor="#7e7e7e" 
                            onChangeText={(text) => { 
                                setEnterPassword(text);
                                setEnterPasswordBorderColor('#7e7e7e')
                            }}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity style={styles.btnSignUp}
                        onPress={handleSignUp}
                    >
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
                    <Text style={[styles.colortext2, styles.fonttext16]}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SignUpEmail
