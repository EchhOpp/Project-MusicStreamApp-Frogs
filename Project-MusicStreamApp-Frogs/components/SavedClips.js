import { StyleSheet, Text, View, TouchableOpacity, Image,ActivityIndicator } from 'react-native'
import React,{useRef, useState} from 'react'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'
import { Video, ResizeMode } from 'expo-av';
import { getFormattedVideoUrl } from '../utils/getFormatted';


const SavedClipItem = ({item}) => {
    const navigation = useNavigation();
    const videoUri = item?.video;
    const videoRef = useRef(item?.video);
    const [isLoading, setIsLoading] = useState(true);
    const handlePress = (id) => {
        navigation.navigate('clipsItem',{id: id});
    }
    const videoSource = videoUri ? { uri: getFormattedVideoUrl(videoUri) } : require('../assets/clips/theweekend.mp4');
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => handlePress(item.id)}
            >
                <View style={styles.icon}>
                    <Ionicons name="play" size={16} color="white" />
                </View>
                {/* <Image source={require('../assets/images/clips-eminem.png')} style={styles.img} />
                 */}
                <Video
                    ref={videoRef}
                    source={{videoSource}}
                    // source={{ uri: getFormattedVideoUrl(videoUri) }}
                    style={{
                        width: '100%',
                        height: 250,
                        overflow: 'hidden',
                        borderRadius: 10,
                    }}
                    useNativeControls={false}
                    resizeMode={ResizeMode.STRETCH}
                    isMuted={true}
                    shouldPlay={true}
                    isLooping={true}
                    showControls={true}
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
                />
                <LinearGradient
                    colors={['rgba(255, 255, 255, 0.0)', 'rgba(226, 226, 226,0.8)']}
                    style={styles.avtContainer}
                    >
                    <View style={styles.info}>
                        <Text style={styles.songName}>{item.title} {item.id}</Text>
                        <Text style={styles.authorName}>{item.title}</Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
}

export default SavedClipItem

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginRight: 20,
        position: 'relative',
        width: '47%',
    },
    icon: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: 10,
        borderRadius: 50,
        fontSize: 16
    },
    img: {
        borderRadius: 10,
        width: '100%',
    },
    info: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        zIndex: 1,
        width: '84%',
    },
    songName: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    authorName: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12,
    },
    avtContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    }


})