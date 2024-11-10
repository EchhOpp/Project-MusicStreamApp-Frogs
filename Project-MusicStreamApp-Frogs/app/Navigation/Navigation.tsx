import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../../constants/Colors';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import GetStart from '../screens/get_start/GetStart';
import GetStartCount from '../screens/get_start/GetStartCount';
import SignIn from '../screens/sign_in/SignIn';
import SignUp from '../screens/sign_in/SignUp';
import SignInStep1 from '../screens/sign_in/SignInStep1';
import SignInStep2 from '../screens/sign_in/SignInStep2';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import HeaderLeft from '../../components/headerLeft';
import HeaderRight from '../../components/headerRight';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="GetStart">
            <Stack.Screen
                name="GetStart"
                component={GetStart}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GetStartCount"
                component={GetStartCount}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    title: 'Sign In',
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
                    headerRight: () => (
                        <Ionicons name="ellipsis-vertical" size={24} color={Colors.neutral.white} style={{ marginRight: 20 }} />
                    ),
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
                        height: 100,
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

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

const NavigationTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Profile') {
                        iconName = 'person';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: Colors.primary.main,
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
        </Tab.Navigator>
    );
};

const MainStack = () => {
    return (
        <Stack.Navigator>
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