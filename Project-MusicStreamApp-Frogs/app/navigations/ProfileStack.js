import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile/Profile';
import { Colors } from '../../constants/Colors';
import ProfileHeaderLeft from '../screens/profile/ProfileHeaderLeft';
import ProfileHeaderRight from '../screens/profile/ProfileHeaderRight';
import Settings from '../screens/settings/Settings';
import SettingRight from '../screens/settings/SettingRight';

const Stack = createNativeStackNavigator();

// Profile
const ProfileStack = () => {
    return (
        <Stack.Navigator initialRouteName='Profile'>
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ 
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: Colors.neutral.rgba1,
                    },
                    title: '',
                    headerLeft: () => (
                        <ProfileHeaderLeft />
                    ),
                    headerRight: () => (
                        <ProfileHeaderRight />
                    ),
                 }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{ 
                    headerStyle: {
                        backgroundColor: Colors.neutral.rgba1,
                    },
                    headerTintColor: Colors.neutral.white,
                    headerShadowVisible: false,
                    headerRight: () => (
                        <SettingRight/>
                    ),
                 }}
            />
        </Stack.Navigator>
    );
};

export default ProfileStack;