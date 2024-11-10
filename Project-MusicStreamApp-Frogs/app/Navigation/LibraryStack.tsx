import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';    
import { Colors } from '../../constants/Colors';
import HeaderLeft from '../../components/headerLeft';
import LeftLibrary from '../screens/library/LeftLibrary';
import RightLibrary from '../screens/library/RightLibrary';
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
                        height: 80,
                    },
                    title: '',
                    headerLeft: () => (
                        <LeftLibrary />
                    ),
                    headerRight: () => (
                        <RightLibrary />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}

export default LibraryStack;