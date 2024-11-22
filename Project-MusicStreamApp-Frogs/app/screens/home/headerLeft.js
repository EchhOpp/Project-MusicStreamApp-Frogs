import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import Entypo from '@expo/vector-icons/Entypo';
import { Popins } from '@/constants/Popins';
import { useNavigation } from '@react-navigation/native';
import { getUserProfile } from '@/services/register'; // Assuming the function is exported from this path

const headerLeft = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState('No name');
  const [greeting, setGreeting] = useState('Good Morning');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile();
        setUserName(userProfile.userName || 'No name');
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => navigation.navigate('RegisterName')}
    >
      <Image source={require('../../../assets/images/Profileicon.png')} style={{width: 30, height: 30, borderRadius: 50}}/>
      <View style={styles.body}>
        <Text style={[styles.textName, styles.textBold]}>{userName}</Text>
        <View style={styles.period}>
          <Text style={styles.textTime}>{greeting}</Text>
          <Entypo name="hand" size={12} color="#ffd14a" style={{paddingHorizontal: 4}}/>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default headerLeft;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 4,
    },
    body: {
    },
    textName: {
        color: Colors.neutral.white,
        fontSize: 16,
        marginLeft: 10,
    },
    period: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textTime: {
        color: Colors.neutral.rgba3,
        fontSize: 12,
        marginLeft: 10,
    },
    textBold: {
        fontWeight: Popins.FontFamilies.SemiBold,
        fontFamily: Popins.FontBold,
    }
});