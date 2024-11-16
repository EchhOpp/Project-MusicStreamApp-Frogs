import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import { Colors } from '../../constants/Colors';

// Stack screens
import GetStart from '../screens/get_start/GetStart';
import GetStartCount from '../screens/get_start/GetStartCount';
import SignIn from '../screens/sign_in/SignIn';
import SignUp from '../screens/sign_in/SignUp';
import SignInStep1 from '../screens/sign_in/SignInStep1';
import SignInStep2 from '../screens/sign_in/SignInStep2';

import Tabs from './Tabs';
import Stacks from './Stacks';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen
                name="Auth"
                component={Stacks}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main"
                component={Tabs}
                options={{ 
                    headerShown: false 
                }}
            />
        </Stack.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer independent={true}>
            <MainStack />
        </NavigationContainer>
    );
};



export default Navigation;