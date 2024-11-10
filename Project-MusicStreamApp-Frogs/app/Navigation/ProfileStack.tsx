import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile/Profile';

const Stack = createNativeStackNavigator();

// Profile
const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Clips"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default ProfileStack;