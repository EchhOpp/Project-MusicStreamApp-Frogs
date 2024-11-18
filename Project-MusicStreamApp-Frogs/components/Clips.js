import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, {useRef, useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Video, ResizeMode } from 'expo-av';
import { getFormattedVideoUrl } from '../utils/getFormatted';

const Clips = ({items}) => {
    const videoUri = items?.video;
    const videoRef = useRef(items?.video);
    const [isLoading, setIsLoading] = useState(true);
   
    if (!videoUri) {
        return null; 
    }

  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.icon}>
            <Ionicons name="play" size={16} color="white"/>
        </View>
        <View style={styles.video}>
            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#FFFFFF" />
                </View>
            )}
            <Video
                ref={videoRef}
                source={{
                    uri: getFormattedVideoUrl(videoUri)
                }}
                style={styles.img}
                useNativeControls={false}
                resizeMode={ResizeMode.CONTAIN}
                isMuted={true}
                shouldPlay={true}
                isLooping={true}
                onPlaybackStatusUpdate={status => {
                    if (status.isLoaded) {
                        setIsLoading(false);
                    }
                    if (status.didJustFinish && videoRef.current) {
                        videoRef.current.replayAsync();
                    }
                    if (status.error) {
                        console.error('Error playing video:', status.error);
                    }
                }}
                showPoster={false}
                usePoster={false}
                showControls={false}
            />
            <View style={styles.overlay} />
        </View>
        <View style={styles.name}>
            <Text style={styles.nameMusic}>{items.title}</Text>
            <Text style={styles.nameAuthor}>{items.artist}</Text>
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
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 2
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