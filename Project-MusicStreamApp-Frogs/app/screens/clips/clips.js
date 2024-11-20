import { StyleSheet, View, Text, Image, FlatList, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'
import { Popins } from '@/constants/Popins';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';
import styles from './style/clips';

const Clips = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../../../assets/clips/theweekend.mp4')}
        style={styles.video}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isMuted={true}
        shouldPlay={true}
        isLooping={true}
      />
      <View style={styles.header}>
        <TouchableOpacity style={styles.btndown}>
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
              <Text style={[styles.color, styles.title]}>After Hours Live</Text>
              <Text style={[styles.color2, styles.subtitle]}>The Weeknd</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.follow}>
            <Text style={styles.followtext}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )
}

export default Clips

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.neutral.gray,
//     position: 'relative',
//   },
//   header: {
//     marginHorizontal: 20,
//     marginTop: 40,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 100,
//   },
//   btndown: {
//     backgroundColor: 'rgba(255, 255, 256, 0.3)',
//     padding: 10,
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   btn: {
//     backgroundColor: 'rgba(255, 255, 256, 0.3)',
//     padding: 10,
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//   },
//   body: {
//     position: 'absolute',
//     bottom: '18%',
//     left: 0,
//     right: 0,
//     zIndex: 100,
//     marginHorizontal: 20,
//   },
//   bodycontent1: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   lyrics: {
//     alignItems: 'flex-end',
//     justifyContent: 'flex-end',
//   },
//   color: {
//     color: Colors.neutral.white,
//     fontSize: 16,
//     fontWeight: 'bold',
//     width: 250,
//   },
//   controllicon: {
//     gap: 10,
//   },
//   icon: {
//     backgroundColor: 'rgba(255, 255, 256, 0.3)',
//     padding: 10,
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   color2: {
//     color: 'rgba(255, 255, 256, 0.5)'
//   },
//   bodycontent2: {
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     gap: 10
//   },
//   imagecontainer: {
//     flexDirection: 'row',
//     gap: 10,
//   },
//   info: {
//     gap: 5,
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     width: 120
//   },
//   subtitle: {
//     fontSize: 12,
//     width: 120
//   },
//   follow: {
//     backgroundColor: 'rgba(255, 255, 256, 0.3)',
//     padding: 10,
//     borderRadius: 50,
//     width: 80,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   followtext: {
//     fontSize: 12,
//     color: Colors.neutral.white
//   }
// })