import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

import Tabs from './Tabs';
import Stacks from './Stacks';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Main">
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