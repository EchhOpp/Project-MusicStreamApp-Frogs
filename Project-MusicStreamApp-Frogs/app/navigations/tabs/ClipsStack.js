import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../screens/profile/Profile';

const Stack = createNativeStackNavigator();

// Clips
const ClipsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Clips"
                component={SavedClips}
                options={{ 
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: Colors.neutral.rgba1,
                    },
                    title: '',
                    headerLeft: () => (
                        <LeftLibrary />
                    ),
                    headerRight: () => (
                        <RightLibrary />
                    )
                 }}

            />
        </Stack.Navigator>
    );
}

export default ClipsStack;