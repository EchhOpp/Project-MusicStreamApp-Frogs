import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../../constants/Colors';
import { View } from 'react-native';

// Stack screens
import GetStart from '../screens/get_start/GetStart';
import GetStartCount from '../screens/get_start/GetStartCount';
import SignIn from '../screens/sign_in/SignIn';
import SignUp from '../screens/sign_in/SignUp';
import SignInStep1 from '../screens/sign_in/SignInStep1';
import SignInStep2 from '../screens/sign_in/SignInStep2';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <View style={{ flex: 1 }}>
            <Stack.Navigator initialRouteName="SignInStep2">
                <Stack.Screen
                    name="GetStart"
                    component={GetStart}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="GetStartCount"
                    component={GetStartCount}
                    options={{ 
                        headerShown: false,
                        title: 'Sign In',
                    }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        title: 'Login',
                        headerStyle: {
                            backgroundColor: Colors.neutral.black,
                        },
                        headerTintColor: Colors.neutral.white,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        title: 'Sign up',
                        headerStyle: {
                            backgroundColor: Colors.neutral.black,
                        },
                        headerTintColor: Colors.neutral.white,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="SignInStep1"
                    component={SignInStep1}
                    options={{
                        title: 'Choose music',
                        headerStyle: {
                            backgroundColor: Colors.neutral.black,
                        },
                        headerTintColor: Colors.neutral.white,
                        headerShadowVisible: false,
                    }}
                />
                <Stack.Screen
                    name="SignInStep2"
                    component={SignInStep2}
                    options={{
                        title: 'Choose music',
                        headerStyle: {
                            backgroundColor: Colors.neutral.black,
                        },
                        headerTintColor: Colors.neutral.white,
                        headerShadowVisible: false,
                    }}
                />
            </Stack.Navigator>
        </View>
    );
};

export default AuthStack;
