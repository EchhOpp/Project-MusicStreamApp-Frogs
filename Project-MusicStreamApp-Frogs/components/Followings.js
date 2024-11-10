import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

const Followings = () => {
  return (
    <View style={styles.container}>
        <View style={styles.body}>
            <TouchableOpacity style={styles.avtContainer}>
                <Image source={require('@/assets/images/followings.png')} style={styles.avt}/>
            </TouchableOpacity>
        </View>
        <Text style={styles.nameAuth}>Taylor Swift</Text>
    </View>
  )
}

export default Followings

const styles = StyleSheet.create({
    container: {
        marginRight: 20,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },

    body: {
        borderRadius: 50,
        borderWidth: 2.8,
        borderColor: Colors.primary.main,
    },

    avtContainer: {
        padding: 4, 
    },

    avt: {
        borderRadius: 50,
    },

    nameAuth: {
        color: Colors.neutral.white,
        fontSize: Popins.Heading6.size,
        marginTop: 8,
    },
})