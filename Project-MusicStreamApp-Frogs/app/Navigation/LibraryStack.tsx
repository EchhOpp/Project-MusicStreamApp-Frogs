import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';    
import { Colors } from '../../constants/Colors';
import HeaderLeft from '../../components/headerLeft';
import HeaderRight from '../../components/headerRight';
import Library from '../screens/library/Library';

const Stack = createNativeStackNavigator();


const LibraryStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Library"
                component={Library}
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
        </Stack.Navigator>
    );
}

export default LibraryStack;