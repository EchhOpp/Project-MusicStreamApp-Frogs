import { StyleSheet, Text, View, ScrollView, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/SignInStep1'
const SignInStep1 = () => {
    return (
        <ScrollView style={styles.container} >
            <View style={styles.header}>
                <View style={styles.steps}>
                    <View style={styles.step}></View>
                    <View style={styles.step}></View>
                </View>
                <Text style={[styles.fonttext24, styles.txtHeader]}>Choose your genre and artist you like.</Text>
            </View>
            <View style={styles.choose}>
                <TextInput style={[styles.fonttext14, styles.txtInput]} placeholder='Search Genre or Artist' placeholderTextColor="#7e7e7e" />
                <View style={styles.litsItem}>
                    <Text style={[styles.fonttext16, styles.itemN]}>Hip-hop</Text>
                    <Text style={[styles.fonttext16, styles.itemN]}>R&B</Text>
                    <Text style={[styles.fonttext16, styles.itemN]}>Alternative</Text>
                </View>
                <View style={styles.litsItem}>
                    <Text style={[styles.fonttext16, styles.itemN]}>Pop</Text>
                    <Text style={[styles.fonttext16, styles.itemN]}>Rock</Text>
                    <Text style={[styles.fonttext16, styles.itemN]}>Electronic</Text>
                </View>
                <View style={styles.litsItem}>
                    <Text style={[styles.fonttext16, styles.itemN]}>Country</Text>
                    <Text style={[styles.fonttext16, styles.itemN]}>Classical</Text>
                    <Text style={[styles.fonttext16, styles.itemN]}>Jazz</Text>
                </View>
                <View style={styles.litsItem}>
                    <Text style={[styles.fonttext16, styles.itemN]}>Blues</Text>
                    <Text style={[styles.fonttext16, styles.itemN]}>House</Text>
                    <Text style={[styles.fonttext16, styles.itemN]}>Experimental</Text>
                </View>

            </View>
            <View style={styles.choose}>
                <Text style={[styles.fonttext24, styles.Artists]}>Artists</Text>
                <View style={styles.litsAva}>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                </View>
                <View style={styles.litsAva}>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                </View>
                <View style={styles.litsAva}>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                </View>
                <View style={styles.litsAva}>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                    <View style={styles.itemAva}>
                        <Image source={require('../../assets/images/avatarArtists.png')} style={styles.avaImage} />
                        <Text style={[styles.fonttext12, styles.colortext]}>The Weeknd</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={[styles.fonttext16, styles.colortext]}>Get started </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default SignInStep1
