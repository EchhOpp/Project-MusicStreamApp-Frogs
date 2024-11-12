import * as React from 'react';
import { View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../../constants/Colors';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

// Stack screens
import GetStart from '../screens/get_start/GetStart';
import GetStartCount from '../screens/get_start/GetStartCount';
import SignIn from '../screens/sign_in/SignIn';
import SignUp from '../screens/sign_in/SignUp';
import SignInStep1 from '../screens/sign_in/SignInStep1';
import SignInStep2 from '../screens/sign_in/SignInStep2';

// Tab screens
import HomeStack from './HomeStack';
import LibraryStack from './LibraryStack';
import ClipsStack from './ClipsStack';
import ProfileStack from './ProfileStack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen
                name="GetStart"
                component={GetStart}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GetStartCount"
                component={GetStartCount}
                options={{ 
                    headerShown: false,
                    title: 'Sign In',
                }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: Colors.neutral.black,
                    },
                    headerTintColor: Colors.neutral.white,
                    headerShadowVisible: false,
                    headerRight: () => (
                        <Ionicons name="ellipsis-vertical" size={24} color={Colors.neutral.white} style={{ marginRight: 20 }} />
                    ),
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    title: 'Sign Up',
                    headerStyle: {
                        backgroundColor: Colors.neutral.black,
                    },
                    headerTintColor: Colors.neutral.white,
                    headerShadowVisible: false,
                }}
            />
            <Stack.Screen
                name="SignInStep1"
                component={SignInStep1}
                options={{
                    title: 'Chose music',
                    headerStyle: {
                        backgroundColor: Colors.neutral.black,
                    },
                    headerTintColor: Colors.neutral.white,
                    headerShadowVisible: false,
                    headerRight: () => (
                        <Ionicons name="ellipsis-vertical" size={24} color={Colors.neutral.white} style={{ marginRight: 20 }} />
                    ),
                }}
            />
            <Stack.Screen
                name="SignInStep2"
                component={SignInStep2}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const NavigationTabs = () => {
    return (
        <Tab.Navigator 
            initialRouteName='Library'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
            
                    if (route.name === 'Home') {
                        iconName = 'home';
                        return <Ionicons name='home' size={24} color={color} />;
                    } else if (route.name === 'Clips') {
                        iconName = 'video-camera';
                        return <FontAwesome name='video-camera' size={24} color={color} />;
                    } else if (route.name === 'Library') {
                        iconName = 'library';
                        return <Ionicons name='library' size={24} color={color} />;
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                        return <Ionicons name='person' size={24} color={color} />;
                    }
                },
                tabBarActiveTintColor: Colors.primary.main,
                tabBarInactiveTintColor: Colors.neutral.white,
                tabBarStyle: {
                    backgroundColor: Colors.neutral.gray,
                    borderTopWidth: 0,
                    height: 80,
                },
            })
            }
        >
        
            {/* Tab home */}
            <Tab.Screen name="Home" component={HomeStack} 
                options={{
                    headerShown: false,
                }}
            />

            {/* Tab Clips */}
            <Tab.Screen name="Clips" component={ClipsStack} />

            {/* Tab library */}
            <Tab.Screen name="Library" component={LibraryStack} 
                options={{
                    headerShown: false,
                }}
            />

            {/* Project  */}
            <Tab.Screen name="Profile" component={ProfileStack} 
                        options={{
                            headerShown: false,
                        }}
            />

        </Tab.Navigator>
    );
};

const MainStack = () => {
    return (
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen
                name="Auth"
                component={AuthStack}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Main"
                component={NavigationTabs}
                options={{ headerShown: false }}
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