import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/home/Home';
import HeaderLeft from '../../screens/home/headerLeft';
import HeaderRight from '../../screens/home/headerRight';
import { Colors } from '@/constants/Colors';
import Search from '../../screens/search/Search'
import SearchHeaderRight from '../../screens/search/SearchHeaderRight'
import SearchHeaderLeft from '../../screens/search/SearchHeaderLeft';
import SearchListAgain from '../../screens/search/searchlistagain';
import SearchNewReleases from '../../screens/search/searchNewReleases';
import Clips from '../../screens/clips/clips';
import RegisterName from '../../screens/profile/registerName';
import MusicDetail from '../../screens/newReleases/MusicDetail';

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
            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: Colors.neutral.gray,
                        height: 80,
                        justifyContent: 'space-between',
                    },
                    headerLeft: () => (
                        <SearchHeaderLeft />
                    ),
                    headerRight: () => (
                        <SearchHeaderRight />
                    ),
                }}
            />
            <Stack.Screen
                name="SearchListAgain"
                component={SearchListAgain}
                options={{
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: Colors.neutral.gray,
                        height: 80
                    },
                    headerLeft: () => (
                        <SearchHeaderLeft />
                    ),
                    headerRight: () => (
                        <SearchHeaderRight />
                    ),
                }}
            />
            <Stack.Screen
                name="SearchNewReleases"
                component={SearchNewReleases}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.neutral.gray,
                    },
                    title: 'New Releases',
                    headerTintColor: '#fff'
                }}
            />
            <Stack.Screen
                name="ClipsVideo"
                component={Clips}
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: Colors.neutral.gray,
                    }
                }}
            />
            <Stack.Screen
                name="RegisterName"
                component={RegisterName}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.neutral.gray,
                    },
                    title: 'Register Name',
                    headerTintColor: '#fff'
                }}
            />
            <Stack.Screen
                name="MusicDetail"
                component={MusicDetail}
                options={{ 
                    headerStyle: {
                        backgroundColor: Colors.neutral.gray,
                    },
                    title: '',
                    headerTintColor: '#fff'
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;