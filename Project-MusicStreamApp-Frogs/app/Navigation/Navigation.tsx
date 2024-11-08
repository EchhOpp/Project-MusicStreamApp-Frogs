import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../sign_in/GetStart';
import SignIn from '../sign_in/SignIn';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: 'Welcome' }}
            />
        </Stack.Navigator>
    );
}

export default Navigation;
