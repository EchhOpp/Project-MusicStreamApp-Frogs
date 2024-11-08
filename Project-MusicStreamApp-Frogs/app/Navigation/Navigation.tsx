import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GetStart from '../screens/get_start/GetStart';
import SignIn from '../screens/sign_in/SignIn';

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
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Navigation;
