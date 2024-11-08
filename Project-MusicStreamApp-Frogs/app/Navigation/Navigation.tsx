import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import GetStart from '../Screens/GetStart/GetStart';
import SignIn from '../Screens/SignIn/SignIn';

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
                name="SignIn"
                component={SignIn}
                options={{ title: 'Welcome' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
}

export default Navigation;
