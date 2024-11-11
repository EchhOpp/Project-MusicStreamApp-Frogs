import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useNavigation } from '@react-navigation/native';

const SearchHeaderRight = () => {
    return (
        <TouchableOpacity  style={styles.container}>
            <View style={styles.icon}>
                <FontAwesome style={styles.body} name="bell" size={20} color={Colors.neutral.white} />
            </View>
        </TouchableOpacity>
    )
}

export default SearchHeaderRight

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon:{
        padding: 12,
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
      body: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
})