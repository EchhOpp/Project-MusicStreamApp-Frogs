import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { getCurrentSong } from '../services/getMusicApi'
import { Audio } from 'expo-av'
import Slider from '@react-native-community/slider'

const LiveMusicBottom = () => {
  const [currentSong, setCurrentSong] = useState(null)
  const [sound, setSound] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [position, setPosition] = useState(0)
  const [duration, setDuration] = useState(0)

  const onPlaybackStatusUpdate = useCallback((status) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis)
      setDuration(status.durationMillis)
      setIsPlaying(status.isPlaying)
    }
  }, [])

  // Lấy bài hát hiện tại
  useEffect(() => {
    const fetchCurrentSong = async () => {
      try {
        getCurrentSong((song) => {
          setCurrentSong(song)
        })
      } catch (error) {
        console.error('Error fetching current song:', error)
      }
    }
    fetchCurrentSong()
  }, [])

  const playSong = useCallback(async () => {
    if (sound) {
      await sound.stopAsync()
      await sound.unloadAsync()
      setSound(null)
    }

    if (currentSong?.mp_audio) {
      try {
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: currentSong.mp_audio },
        )
        setSound(newSound)
        newSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
        await newSound.playAsync()
        setIsPlaying(true)
      } catch (error) {
        console.error('Error loading new sound:', error)
      }
    }
  }, [currentSong])

  const handlePlayPause = async () => {
    if (sound) {
      const status = await sound.getStatusAsync()
      if (status.isPlaying) {
        await sound.pauseAsync()
        setIsPlaying(false)
      } else {
        await sound.playAsync()
        setIsPlaying(true)
      }
    } else {
      playSong()
    }
  }

  const handleSliderValueChange = async (value) => {
    if (sound) {
      await sound.setPositionAsync(value)
    }
  }

  const handlePrevious = () => {
    // Logic để quay lại bài hát trước đó
    console.log('Previous song')
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.music}>
          <Image
            source={currentSong?.image ? { uri: currentSong.image } : require('../assets/images/avatarArtists.png')}
            style={{ width: 40, height: 40, borderRadius: 4 }}
          />
          <View style={styles.textName}>
            <Text style={styles.nameMusic}>{currentSong?.title || 'Tên bài hát'}</Text>
            <Text style={styles.nameAuthor}>{currentSong?.artist || 'Tên ca sĩ'}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.iconLive}>
          <TouchableOpacity onPress={handlePrevious}>
            <Ionicons name="play-back" size={24} color={Colors.neutral.white} style={styles.iconplayback} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconplay} onPress={handlePlayPause}>
            <Ionicons name={isPlaying ? 'pause' : 'play'} size={24} color={Colors.neutral.white} />
          </TouchableOpacity>
        </View>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={duration}
        value={position}
        onSlidingComplete={handleSliderValueChange}
        minimumTrackTintColor={Colors.neutral.white}
        maximumTrackTintColor={'rgba(255, 255, 255, 0.3)'}
        thumbTintColor={'transparent'}
      />
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
    paddingHorizontal: 2,
  },

  music: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 2,
    flex: 1,
  },

  textName: {
    marginLeft: 12,
  },

  nameMusic: {
    color: Colors.neutral.white,
    fontWeight: 'bold',
    fontSize: 14,
    marginVertical: 2,
  },

  nameAuthor: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
  },

  iconLive: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconplayback: {
    borderRadius: 18,
    paddingHorizontal: 10,
  },

  iconplay: {
    borderRadius: 18,
    paddingHorizontal: 4,
    paddingRight: 10,
  },

  slider: {
    width: '102%',
    height: 6,
  },
})