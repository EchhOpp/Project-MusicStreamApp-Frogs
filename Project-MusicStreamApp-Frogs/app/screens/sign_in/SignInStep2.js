import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/SignInStep2'

const SignInStep2 = (
    {navigation}
) => {
  return (
    <ScrollView style={styles.container} >
            <View style={styles.header}>
                <View style={styles.steps}>
                    <View style={[styles.step,styles.colorActive]}></View>
                    <View style={[styles.step,styles.colorNoActive]}></View>
                </View>
                <Text style={[styles.fonttext24, styles.txtHeader]}>Choose your genre and artist you like.</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.itemContent}>
                    <Image source={require('../../../assets/images/Board.png')} />
                    <Text style={[styles.fonttext16, styles.colortext2,styles.contenttext]}>Choose your genre and artist you like.Choose your genre and artist you like.Choose your genre and artist you like.</Text>
                </View>
                <View style={styles.itemContent}>
                    <Image source={require('../../../assets/images/Board.png')} />
                    <Text style={[styles.fonttext16, styles.colortext2,styles.contenttext]}>Choose your genre and artist you like.Choose your genre and artist you like.Choose your genre and artist you like.</Text>
                </View>
                <View style={styles.itemContent}>
                    <Image source={require('../../../assets/images/Board.png')} />
                    <Text style={[styles.fonttext16, styles.colortext2,styles.contenttext]}>Choose your genre and artist you like.Choose your genre and artist you like.Choose your genre and artist you like.</Text>
                </View>

            </View>
            <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('Main')}
            >
                <Text style={[styles.fonttext24, styles.colortext,styles.boldtext]}>Get started </Text>
            </TouchableOpacity>
        </ScrollView>
  )
}

export default SignInStep2
