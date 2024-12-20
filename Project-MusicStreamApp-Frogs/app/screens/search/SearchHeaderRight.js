import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';

const SearchHeaderRight = () => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Notifications')}
        >
            <View style={styles.icon}>
                <FontAwesome name="bell" size={20} color={Colors.neutral.white} />
            </View>
        </TouchableOpacity>
    )
}

export default SearchHeaderRight

const styles = StyleSheet.create({
    container: {
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
})