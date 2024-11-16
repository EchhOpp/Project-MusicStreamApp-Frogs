import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import { Colors } from '../../../constants/Colors';
import LeftLibrary from '../../screens/library/LeftLibrary';
import RightLibrary from '../../screens/library/RightLibrary';
import Library from '../../screens/library/Library';
import PlayListScreen from '../../screens/playlists/PlayLists';
import SavedClips from '../../screens/saved_clips/SavedClips';

const Stack = createNativeStackNavigator();


const LibraryStack = () => {
    const config = {
        animation: 'spring',
        config: {
          stiffness: 1000,
          damping: 500,
          mass: 3,
          overshootClamping: true,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 0.01,
        },
      };
    
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Library"
                component={Library}
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
                    ),
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen
                name="PlayListScreen"
                component={PlayListScreen}
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
                    ),
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                    animation: 'slide_from_right',
                }}
            />
            <Stack.Screen
                name="SavedClips"
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
                    ),
                    transitionSpec: {
                      open: config,
                      close: config,
                    },
                    animation: 'slide_from_right',
                }}
            />
        </Stack.Navigator>
    );
}

export default LibraryStack;
