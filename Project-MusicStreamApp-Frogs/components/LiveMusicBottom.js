import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { Audio } from 'expo-av'
import Slider from '@react-native-community/slider'
import { getCurrentSong } from '@/services/getMusicApi'
import { set } from 'firebase/database'

const LiveMusicBottom = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);  
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    const loadCurrentSong = async () => {
      try {
        const song = await getCurrentSong();
        if (!song) {
          console.error("No song returned from getCurrentSong");
          return;
        }
        setCurrentSong(song);
      } catch (error) {
        console.error("Error loading current song:", error);
      }
    };
    loadCurrentSong();

    // Listen for changes to current song
    const unsubscribe = getCurrentSong((song) => {
      setCurrentSong(song);
    });

    return () => {
      if (unsubscribe) {
        getCurrentSong((song) => {
          setCurrentSong(song);
        });
      }
    };
  }, []);

  const playSound = async () => {
    try {
      if (sound && isLoaded) {
        if (isPlaying) {
          await sound.pauseAsync();
          setIsPlaying(false);
        } else {
          if (position >= duration) {
            await sound.setPositionAsync(0);
          }
          await sound.playAsync();
          setIsPlaying(true);
        }
      } else {
        if (!currentSong?.mp_audio) {
          console.error("No song loaded");
          return;
        }
  
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
  
        // Convert Google Drive link to direct download link
  
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: 'https://drive.google.com/uc?export=download&id=14E42-pSCjxJ2XYfYQSrg7DSYPUMkP9Zd' },
          { shouldPlay: true },
          onPlaybackStatusUpdate
        );
  
        setSound(newSound);
        setIsLoaded(true);
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error playing music:", error);
    }
  };  

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
      setIsLoaded(true);
      
      if (status.didJustFinish) {
        setIsPlaying(false);
        setPosition(status.durationMillis);
      }
    } else {
      setIsLoaded(false);
    }
  };

  const onSlidingComplete = async (value) => {
    if (sound && isLoaded) {
      await sound.setPositionAsync(value);
    }
  };

  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
        setIsLoaded(false);
      }
    };
  }, [sound]);

  return (
     <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.music}>
              <Image source={currentSong?.image ? {uri: currentSong.image} : require('../assets/images/avatarArtists.png')} style={{width: 40, height: 40, borderRadius: 4}}/>
              <View style={styles.textName}>
                  <Text style={styles.nameMusic}>{currentSong?.title || 'Tên bài hát'}</Text>
                  <Text style={styles.nameAuthor}>{currentSong?.artist || 'Tên ca sĩ'}</Text>
              </View>
          </TouchableOpacity>
          <View style={styles.iconLive}>
              <TouchableOpacity>
                  <Ionicons name="play-back" size={18} color={Colors.neutral.white} style={styles.iconplayback}/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconplay} onPress={() => playSound()}>
                  <Ionicons name={isPlaying ? "pause" : "play"} size={24} color={Colors.neutral.white}/>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.playerContainer}>
            <Slider
              style={[styles.slider]}
              minimumValue={0}
              maximumValue={duration}
              value={position}
              onSlidingComplete={onSlidingComplete}
              minimumTrackTintColor={Colors.neutral.white}
              maximumTrackTintColor="rgba(255,255,255,0.3)"
              thumbStyle={{width: 0, height: 0}} 
              thumbTintColor="transparent"
            />
        </View>
    </View>
  )
}

export default LiveMusicBottom

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        alignSelf: 'center',
        width: '99%',
        backgroundColor: '#242328',
        marginVertical: 0,
        overflow: 'hidden',
    },

    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 54,
        padding: 2,

    },

    music: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 4,
        flex: 1,
    },

    textName: {
        marginLeft: 12,
    },

    nameMusic: {
        color:  Colors.neutral.white,
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 2,
    },

    nameAuthor: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
    },

    playerContainer: {
        width: '106%',
        position: 'absolute',
        bottom: 0,
    },

    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },

    slider: {
        flex: 1,
        height: 2,
    },

    time: {
        color: Colors.neutral.white,
        fontSize: 12,
    },

    iconLive: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconplayback: {
        borderRadius: 18,
        padding: 12,
    },

    iconplay: {
        borderRadius: 18,
        padding: 12,
    },
})