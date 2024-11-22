import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Popins } from '@/constants/Popins';
import { Colors } from '@/constants/Colors';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import externalStyles from './style/clips';

const Clips = () => {
  return (
    <View style={externalStyles.container}>
      <Video
        source={require('../../../assets/clips/theweekend.mp4')}
        style={externalStyles.video}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isMuted={true}
        shouldPlay={true}
        isLooping={true}
      />
      <View style={externalStyles.header}>
        <TouchableOpacity style={externalStyles.btndown}>
          <AntDesign name="down" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={externalStyles.btn}>
          <Feather name="more-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={externalStyles.body}>
        <View style={externalStyles.bodycontent1}>
          <View style={externalStyles.lyrics}>
            <Text style={[externalStyles.ly, externalStyles.color]}>I just wanna feel the ground when I’m coming down</Text>
          </View>
          <View style={externalStyles.controllicon}>
            <TouchableOpacity style={externalStyles.icon}>
              <AntDesign name="hearto" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={externalStyles.icon}>
              <Feather name="bookmark" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={externalStyles.icon}>
              <AntDesign name="sharealt" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={externalStyles.icon}>
              <AntDesign name="download" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={externalStyles.bodycontent2}>
          <View style={externalStyles.imagecontainer}>
            <Image source={require('../../../assets/images/afterhoursLive.png')} style={externalStyles.image} />
            <View style={externalStyles.info}>
              <Text style={[externalStyles.color, externalStyles.title]}>After Hours Live</Text>
              <Text style={[externalStyles.color2, externalStyles.subtitle]}>The Weeknd</Text>
            </View>
          </View>
          <TouchableOpacity style={[externalStyles.follow, { backgroundColor: 'red' }]}>
            <Text style={externalStyles.followtext}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Clips;