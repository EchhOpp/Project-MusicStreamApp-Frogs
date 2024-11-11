import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './style/Profile'


const Profile = () => {
  return (
    <View style ={styles.container}>
        <View style={styles.viewProfile}>
            <Image source={require('../../../assets/images/Profileicon.png')} style={styles.profileImage}/>
            <Text style={[styles.textH1,styles.Color]}>Samibkhes</Text>
            <Text style={[styles.textH2,styles.profileEmail]}>Samibkhes@gmail.com</Text>
        </View>
    </View>
  )
}

export default Profile

// const styles = StyleSheet.create({})