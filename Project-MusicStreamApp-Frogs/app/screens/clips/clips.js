import { StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useRef, useState, useEffect } from 'react';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import styles from './style/clips';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getVideoById } from '@/services/getMusicApi';
import { getFormattedVideoUrl } from '@/utils/getFormatted';

const Clips = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [video, setVideo] = useState(null);
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        const videoData = await getVideoById(id);
        if (videoData) {
          setVideo(videoData);
        } else {
          console.log('Video not found');
        }
      } catch (error) {
        console.error('Error loading video:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadVideo();
  }, [id]);

  const videoSource = video?.video
    ? { uri: getFormattedVideoUrl(video.video) }
    : require('../../../assets/clips/theweekend.mp4'); // Video mặc định

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      )}
      <Video
        ref={videoRef}
        source={videoSource}
        style={styles.video}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isMuted={true}
        shouldPlay={true}
        isLooping={true}
      />
      <View style={styles.header}>
        <TouchableOpacity style={styles.btndown} onPress={() => navigation.goBack()}>
          <AntDesign name="down" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Feather name="more-vertical" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.bodycontent1}>
          <View style={styles.lyrics}>
            <Text style={[styles.ly, styles.color]}>I just wanna feel the ground when I’m coming down</Text>
          </View>
          <View style={styles.controllicon}>
            <TouchableOpacity style={styles.icon}>
              <AntDesign name="hearto" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Feather name="bookmark" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <AntDesign name="sharealt" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <AntDesign name="download" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bodycontent2}>
          <View style={styles.imagecontainer}>
            <Image source={require('../../../assets/images/afterhoursLive.png')} style={styles.image} />
            <View style={styles.info}>
              <Text style={[styles.color, styles.title]}>{video?.title || 'After Hours Live'}</Text>
              <Text style={[styles.color2, styles.subtitle]}>{video?.artist || 'The Weeknd'}</Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.follow, { backgroundColor: 'red' }]}>
            <Text style={styles.followtext}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Clips;
