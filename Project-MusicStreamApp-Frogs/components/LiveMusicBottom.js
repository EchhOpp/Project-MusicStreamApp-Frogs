// Import các thư viện cần thiết
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { Audio } from 'expo-av'
import Slider from '@react-native-community/slider'
import { getCurrentSong } from '@/services/getMusicApi'

const LiveMusicBottom = () => {
  // Khai báo các state cần thiết
  const [sound, setSound] = useState(); // Quản lý âm thanh
  const [isPlaying, setIsPlaying] = useState(false); // Trạng thái phát nhạc
  const [position, setPosition] = useState(0); // Vị trí hiện tại của bài hát
  const [duration, setDuration] = useState(0); // Tổng thời lượng bài hát
  const [isLoaded, setIsLoaded] = useState(false); // Trạng thái tải bài hát
  const [currentSong, setCurrentSong] = useState(null); // Bài hát hiện tại

  // Effect để tải bài hát hiện tại khi component mount
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
    // Lắng nghe sự thay đổi của bài hát hiện tại
    const unsubscribe = getCurrentSong((song) => {
      setCurrentSong(song);
    });

    // Cleanup khi component unmount
    return () => {
      if (unsubscribe) {
        getCurrentSong((song) => {
          setCurrentSong(song);
        });
      }
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  // Effect để tải và phát bài hát mới khi currentSong thay đổi
  useEffect(() => {
    let isMounted = true;

    const loadAndPlayNewSong = async () => {
      try {
        if (!currentSong?.mp_audio) return;
        // Dừng và giải phóng bài hát trước đó nếu có
        if (sound) {
          await sound.stopAsync();
          await sound.unloadAsync();
          setSound(null);
          setIsLoaded(false);
          setIsPlaying(false);
        }

        // Cấu hình chế độ âm thanh
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
        // Tạo và phát bài hát mới
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: currentSong.mp_audio },
          { shouldPlay: false }, // Thay đổi thành true để tự động phát
          onPlaybackStatusUpdate
        );
        
        // Kiểm tra xem component còn mounted không
        if (isMounted) {
          setSound(newSound);
          setIsLoaded(true);
          setIsPlaying(false);
          setPosition(0);
        } else {
          // Cleanup nếu component unmount trong quá trình tải
          await newSound.unloadAsync();
        }
      } catch (error) {
        console.error("Error loading new song:", error);
      }
    };
    loadAndPlayNewSong();
    setPosition(0); // Reset vị trí slider khi bài hát thay đổi

    return () => {
      isMounted = false;
    };
  }, [currentSong]);

  // Hàm xử lý phát/dừng nhạc
  const playSound = async () => {
    try {
      if (sound && isLoaded) { // Kiểm tra xem âm thanh đã được tải và sẵn sàng để phát chưa
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
  
        // Cấu hình chế độ âm thanh
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });
  
        // Tạo và phát bài hát mới
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: currentSong.mp_audio },
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

  // Callback cập nhật trạng thái phát nhạc
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

  // Xử lý khi kéo thả slider
  const onSlidingComplete = async (value) => {
    if (sound && isLoaded) {
      await sound.setPositionAsync(value);
    }
  };

  // Effect cleanup khi component unmount
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
        setIsLoaded(false);
        setIsPlaying(false);
      }
    };
  }, [sound]);

  // Render giao diện
  return (
     <View style={styles.container}>
        <View style={styles.topContainer}>
          <TouchableOpacity 
            style={styles.music}
            onPress={playSound}
          >
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

// Định nghĩa styles
const styles = StyleSheet.create({
    // Container chính
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

    // Container phần trên
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: 54,
        padding: 2,
    },

    // Style cho phần thông tin bài hát
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
        color: Colors.neutral.white,
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 2,
    },

    nameAuthor: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
    },

    // Style cho phần player
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

    // Style cho các nút điều khiển
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