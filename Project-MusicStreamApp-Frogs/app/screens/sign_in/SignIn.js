// SignIn.js
import { Text, View, SafeAreaView, TouchableOpacity, Image, TextInput, Keyboard,TouchableWithoutFeedback } from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles/SignIn';

// Services Firebase
import  {signInUser , checkGenreAndArtists} from '../../../services/AuthSignIn';

const SignIn = ({ navigation }) => {
    const [userName, setUserName] = useState("");
    const [passWord, setPassWord] = useState("");
    const [userNameBorderColor, setUserNameBorderColor] = useState('#7e7e7e');
    const [passwordBorderColor, setPasswordBorderColor] = useState('#7e7e7e');
    const [showError, setShowError] = useState(false);

    const handleSignIn = async () => {
        let valid = true;
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
            try {
                const user = await signInUser(userName, passWord);
                console.log('User signed in:', user);
                const hasSelectedGenreAndArtists = await checkGenreAndArtists();
                if (hasSelectedGenreAndArtists) {
                    navigation.navigate('Main')
                } else {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'SignInStep1' }],
                    });
                }
                setShowError(false);
                } catch (error) {
                    setShowError(true);
                    alert(error);
                }
        } else {
            setShowError(true);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.viewInputs}>
                        <TextInput
                            style={[styles.input, { borderColor: userNameBorderColor }]}
                            onChangeText={(text) => { setUserName(text)}}
                            placeholder="Username or Email address"
                            placeholderTextColor='#7e7e7e'
                        />
                        <TextInput
                            style={[styles.input, { borderColor: passwordBorderColor }]}
                            onChangeText={(text) => { setPassWord(text) }}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="#7e7e7e"
                        />
                        {showError && (
                            <View style={styles.viewerror}>
                                <Image style={styles.imgerror} source={require('../../../assets/images/Information-circle.png')} />
                                <Text style={[styles.txterror]}>Username or Password is incorrect</Text> 
                            </View>
                        )}

                        <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
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
                        <Text style={[styles.colortext2, styles.fonttext14]}>Don't have an account?</Text>
                        <Image source={require('../../../assets/images/Line24.png')} style={styles.footerImg} />
                    </View>
                    <TouchableOpacity style={styles.btnfooter} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={[styles.colortext, styles.fonttext16]}>Sign up for free</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default SignIn;
