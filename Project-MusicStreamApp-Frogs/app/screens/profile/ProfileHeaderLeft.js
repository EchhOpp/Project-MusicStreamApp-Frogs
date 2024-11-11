import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

const ProfileHeaderLeft = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.txtProfile}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileHeaderLeft

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    txtProfile: {
        color: Colors.neutral.white,
        fontSize: Popins.Heading4.size,
        fontWeight: 'bold',
        marginLeft: 10
    },

})