import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import GetStart from '../screens/get_start/GetStart';
import GetStartCount from '../screens/get_start/GetStartCount';
import SignIn from '../screens/sign_in/SignIn';
import SignUp from '../screens/sign_in/SignUp';
import SignInStep1 from '../screens/sign_in/SignInStep1';
import SignInStep2 from '../screens/sign_in/SignInStep2';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="GetStart">
            <Stack.Screen
                name="GetStart"
                component={GetStart}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GetStartCount"
                component={GetStartCount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ 
                    title: 'Sign In',
                    headerStyle: {
                        backgroundColor: Colors.neutral.black,
                    },
                    headerTintColor: Colors.neutral.white,
                    headerShadowVisible: false,
                    headerRight: () => (
                        <Ionicons name="ellipsis-vertical" size={24} color={Colors.neutral.white} style={{marginRight: 20}} />
                    ),
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ 
                    title: 'Sign Up',
                    headerStyle: {
                        backgroundColor: Colors.neutral.black,
                    },
                    headerTintColor: Colors.neutral.white,
                    headerShadowVisible: false,
                    headerRight: () => (
                        <Ionicons name="ellipsis-vertical" size={24} color={Colors.neutral.white} style={{marginRight: 20}} />
                    ),
                }}
            />
            <Stack.Screen
                name="SignInStep1"
                component={SignInStep1}
                options={{ 
                    title: 'Chose music',
                    headerStyle: {
                        backgroundColor: Colors.neutral.black,
                    },
                    headerTintColor: Colors.neutral.white,
                    headerShadowVisible: false,
                    headerRight: () => (
                        <Ionicons name="ellipsis-vertical" size={24} color={Colors.neutral.white} style={{marginRight: 20}} />
                    ),
                }}
            />
            <Stack.Screen
                name="SignInStep2"
                component={SignInStep2}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Navigation;
