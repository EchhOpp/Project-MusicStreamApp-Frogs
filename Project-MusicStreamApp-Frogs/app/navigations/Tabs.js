import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { BlurView } from 'expo-blur';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stack screens
import LiveMusicBottom from '../../components/LiveMusicBottom';
import HomeStack from './tabs/HomeStack';
import LibraryStack from './tabs/LibraryStack';
import ClipsStack from './tabs/ClipsStack';
import ProfileStack from './tabs/ProfileStack';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* Play */}
            <View style={styles.playlistContainer}>
                <LiveMusicBottom />
            </View>
            {/* Tab Navigator */}
            <Tab.Navigator
                screenOptions={() => ({
                    tabBarActiveTintColor: Colors.primary.main,
                    tabBarInactiveTintColor: Colors.neutral.white,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 0,
                        borderTopWidth: 0,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        height: 60,
                        paddingVertical: 10,
                        backgroundColor: Colors.neutral.black,
                    },
                    tabBarLabelStyle: {
                        fontSize: 10,
                        height: 24,
                    },
                    tabBarBackground: () => (
                        <BlurView intensity={90} tint="dark" style={{
                            ...StyleSheet.absoluteFillObject,
                            overflow: 'hidden',
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                            }} />
                    ),
                })}
            >
                {/* Tab Home */}
                <Tab.Screen name="HomeTab" 
                    component={HomeStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Ionicons name='home' size={24} color={color} />
                        ),
                        title: 'Trang chủ',
                    }}
                />

                {/* Tab Clips */}
                <Tab.Screen name="ClipsTab" 
                    component={ClipsStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="web-stories" size={24} color={color} />
                        ),
                    }}
                />

                {/* Tab Library */}
                <Tab.Screen name="LibraryTab" 
                    component={LibraryStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="bookmark" size={24} color={color} />
                        ),
                    }}
                />

                {/* Tab Profile */}
                <Tab.Screen name="ProfileTab" 
                    component={ProfileStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="user" size={24} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    playlistContainer: {
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        zIndex: 10, 
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});

export default NavigationTabs;
