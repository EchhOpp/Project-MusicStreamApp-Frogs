import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Popins } from '@/constants/Popins';
import { useNavigation } from '@react-navigation/native';
import { updateUserProfile } from '@/services/register';

const RegisterName = () => {
    const [name, setName] = useState('');
    const navigation = useNavigation();

    const handleRegister = async () => {
        if (name.trim()) {
            try {
                await updateUserProfile({ userName: name.trim() });
                navigation.navigate('Home');
            } catch (error) {
                console.error('Error updating user profile:', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>What's your name?</Text>
                <Text style={styles.subtitle}>
                    This appears on your profile and helps friends find you
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    placeholderTextColor={Colors.neutral.rgba3}
                    value={name}
                    onChangeText={setName}
                    autoFocus={true}
                />

                <TouchableOpacity 
                    style={[
                        styles.button,
                        !name.trim() && styles.buttonDisabled
                    ]}
                    onPress={handleRegister}
                    disabled={!name.trim()}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
            <View style={{height: 100}}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutral.gray,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        color: Colors.neutral.white,
        fontFamily: Popins.FontBold,
        marginBottom: 10,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        color: Colors.neutral.rgba3,
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 20
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.neutral.gray2,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        color: Colors.neutral.white,
        marginBottom: 30
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.primary.main,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonDisabled: {
        opacity: 0.5
    },
    buttonText: {
        color: Colors.neutral.white,
        fontSize: 16,
        fontFamily: Popins.FontBold
    }
});

export default RegisterName;
