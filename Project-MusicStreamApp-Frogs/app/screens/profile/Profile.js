import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './style/Profile'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.viewProfile}>
        <Image source={require('../../../assets/images/Profileicon.png')} style={styles.profileImage} />
        <Text style={[styles.textH1, styles.Color]}>Samibkhes</Text>
        <Text style={[styles.textH2, styles.profileEmail]}>Samibkhes@gmail.com</Text>
      </View>
      <View style={styles.viewRow}>
        <View style={styles.viewFollower2}>
          <Text style={[styles.textH3, styles.Color]}>24.3K</Text>
          <Text style={styles.textH4}>Followers</Text>
        </View>
        <View style={styles.viewFollower2}>
          <Text style={[styles.textH3, styles.Color]}>537</Text>
          <Text style={styles.textH4}>Followings</Text>
        </View>
        <View style={styles.viewFollower2}>
          <Text style={[styles.textH3, styles.Color]}>130.1K</Text>
          <Text style={styles.textH4}>Views</Text>
        </View>
      </View>
      <View style={styles.viewRow}>
        <TouchableOpacity style={styles.btnedit}>
          <Text style={[styles.textH3, styles.Color]}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnShare}>
          <AntDesign name="sharealt" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.functions}>
        <TouchableOpacity style={styles.functionitem}>
          <AntDesign name="download" size={18} color="white" style={styles.iconf} />
          <View style={styles.functiondes}>
            <View style={styles.functionname}>
              <Text style={[styles.Color, styles.textH3]}>Download</Text>
              <Text style={styles.textH4}>Downloads - Device files</Text>
            </View>
            <AntDesign name="right" size={14} color="rgba(255, 255, 255, 0.5)" style={styles.iconleft} />
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.functionitem}>
          <MaterialCommunityIcons name="timer-sand-empty" size={18} color="white" style={styles.iconf} />
          <View style={styles.functiondes}>
            <View style={styles.functionname}>
              <Text style={[styles.Color, styles.textH3]}>History</Text>
              <Text style={styles.textH4}>Songs - Videos - Clips</Text>
            </View>
            <AntDesign name="right" size={14} color="rgba(255, 255, 255, 0.5)" style={styles.iconleft} />
          </View>

        </TouchableOpacity>
        <TouchableOpacity 
            onPress={() => navigation.navigate('Settings')}
            style={styles.functionitem}>
          <SimpleLineIcons name="settings" size={18} color="white" style={styles.iconf} />
          <View style={styles.functiondes}>
            <View style={styles.functionname}>
              <Text style={[styles.Color, styles.textH3]}>Settings</Text>
              <Text style={styles.textH4}>Privacy - notifications</Text>
            </View>
            <AntDesign name="right" size={14} color="rgba(255, 255, 255, 0.5)" style={styles.iconleft} />
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.functionitem}>
          <AntDesign name="message1" size={18} color="white" style={styles.iconf} />
          <View style={styles.functiondes}>
            <View style={styles.functionname}>
              <Text style={[styles.Color, styles.textH3]}>Help & feedback</Text>
              <Text style={styles.textH4}>Ask the help community</Text>
            </View>
            <AntDesign name="right" size={14} color="rgba(255, 255, 255, 0.5)" style={styles.iconleft} />
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.functionitem}>
          <AntDesign name="infocirlceo" size={18} color="white" style={styles.iconf} />
          <View style={styles.functiondes}>
            <View style={styles.functionname}>
              <Text style={[styles.Color, styles.textH3]}>About Musica</Text>
              <Text style={styles.textH4}>Terms of Service</Text>
            </View>
            <AntDesign name="right" size={14} color="rgba(255, 255, 255, 0.5)" style={styles.iconleft} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Profile

// const styles = StyleSheet.create({})