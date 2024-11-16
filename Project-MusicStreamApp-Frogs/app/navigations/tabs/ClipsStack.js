import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../screens/profile/Profile';
import SavedClips from '../../screens/saved_clips/SavedClips';
import LeftLibrary from '../../screens/library/LeftLibrary';
import RightLibrary from '../../screens/library/RightLibrary';
import { Colors } from '../../../constants/Colors';

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