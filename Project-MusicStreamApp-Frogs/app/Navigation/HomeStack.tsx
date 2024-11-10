import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import HeaderLeft from '@/components/headerLeft';
import HeaderRight from '@/components/headerRight';
import { Colors } from '@/constants/Colors';

const Stack = createNativeStackNavigator();


// Home
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: Colors.neutral.gray,
                        height: 80,
                    },
                    title: '',
                    headerLeft: () => (
                        <HeaderLeft />
                    ),
                    headerRight: () => (
                        <HeaderRight />
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;