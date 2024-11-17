import { StyleSheet, Text, View, TouchableOpacity,} from 'react-native'
import React, {useRef } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Video, ResizeMode } from 'expo-av';

const Clips = () => {
    const video = useRef(null);

  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.icon}>
            <Ionicons name="play" size={16} color="white"/>
        </View>
        <View style={styles.video}>
            <Video
                ref={video}
                source={{
                    uri: 'https://drive.google.com/uc?export=download&id=1yR_o6kz62CK1RnG-EtctQXE6FaMPfEaj'
                }}
                style={styles.img}
                useNativeControls={false}
                resizeMode={ResizeMode.CONTAIN}
                isMuted={true}
                shouldPlay={true}
                isLooping={true}
                onPlaybackStatusUpdate={status => {
                    if (status.didJustFinish) {
                        video.current.replayAsync();
                    }
                }}
                showPoster={false}
                usePoster={false}
                showControls={false}
            />
            <View style={styles.overlay} />
        </View>
        <View style={styles.name}>
            <Text style={styles.nameMusic}>Performing “The Hills”</Text>
            <Text style={styles.nameAuthor}>The Weeknd</Text>
        </View>
    </TouchableOpacity>
  )
}

export default Clips

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 10,
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        top: 10,
        left: 16,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        padding: 8,
        borderRadius: 50, 
        fontSize: 16
    },
    img: {
        borderRadius: 4,
        height: 250,
        width: 140,
        overflow: 'hidden',
    },
    video: {
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    name: {
        position: 'absolute',
        bottom: 10,
        left: 16,
        zIndex: 1,
        width: '90%',
        marginLeft: 4,
    },
    nameMusic: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    nameAuthor: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
    },

})