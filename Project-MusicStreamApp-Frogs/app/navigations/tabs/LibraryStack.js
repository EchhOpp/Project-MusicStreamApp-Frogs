import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  
import { Colors } from '@/constants/Colors';
import LeftLibrary from '../../screens/library/LeftLibrary';
import RightLibrary from '../../screens/library/RightLibrary';
import Library from '../../screens/library/Library';
import PlayListScreen from '../../screens/playlists/PlayLists';
import SavedClips from '../../screens/saved_clips/SavedClips';
import ArtissProfile from '../../screens/Artist_Profile/ArtissProfile';
import ArtistProfileRight from '../../screens/Artist_Profile/ArtistProfileRight';
import ArtistProfileLeft from '../../screens/Artist_Profile/ArtistProfileLeft';
import MucsicPlayer from '../../screens/music_player/MucsicPlayer';
import Next from '../../screens/next/Next';

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
        <Stack.Navigator initialRouteName='Library'>
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
            <Stack.Screen
                name="ArtistProfile"
                component={ArtissProfile}
                options={{
                    headerShown: false,
                    // headerShadowVisible: false,
                    // headerStyle: {
                    //     // backgroundColor: Colors.neutral.rgba1,
                    //     backgroundColor: 'transparent', // Làm cho nền của header trong suốt
                    // },
                    // title: '',
                    // headerLeft: () => (
                    //     <ArtistProfileLeft />
                    // ),
                    // headerRight: () => (
                    //     <ArtistProfileRight />
                    // ),
                }}
            />
             <Stack.Screen
                name="MucsicPlayer"
                component={MucsicPlayer}
                options={{
                    headerShown: false,
                    // headerShadowVisible: false,
                    // headerStyle: {
                    //     // backgroundColor: Colors.neutral.rgba1,
                    //     backgroundColor: 'transparent', // Làm cho nền của header trong suốt
                    // },
                    // title: '',
                    // headerLeft: () => (
                    //     <ArtistProfileLeft />
                    // ),
                    // headerRight: () => (
                    //     <ArtistProfileRight />
                    // ),
                }}
            />
            <Stack.Screen
                name="Next"
                component={Next}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
}

export default LibraryStack;
