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
        </Stack.Navigator>
    );
};

export default HomeStack;