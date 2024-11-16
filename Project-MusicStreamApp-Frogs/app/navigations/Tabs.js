import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Colors } from '../../constants/Colors';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stack screens
import PlayList from '../../components/LiveMusicBottom';
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
                <PlayList />
            </View>

            {/* Tab Navigator */}
            <Tab.Navigator
                screenOptions={() => ({
                    tabBarActiveTintColor: Colors.primary.main,
                    tabBarInactiveTintColor: Colors.neutral.white,
                    tabBarStyle: {
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        position: 'absolute',
                        bottom: 0,
                        borderTopWidth: 0,
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        height: 62,
                    },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        marginBottom: 12,
                    },
                })}
            >
                {/* Tab Home */}
                <Tab.Screen name="Home" component={HomeStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Ionicons name='home' size={24} color={color} />
                        ),
                        title: 'Trang chủ',
                    }}
                />

                {/* Tab Clips */}
                <Tab.Screen name="Clips" component={ClipsStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name="web-stories" size={24} color={color} />
                        ),
                    }}
                />

                {/* Tab Library */}
                <Tab.Screen name="Library" component={LibraryStack}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="bookmark" size={24} color={color} />
                        ),
                    }}
                />

                {/* Tab Profile */}
                <Tab.Screen name="Profile" component={ProfileStack}
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
        bottom: 62,
        left: 0,
        right: 0,
        zIndex: 10, 
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});

export default NavigationTabs;
