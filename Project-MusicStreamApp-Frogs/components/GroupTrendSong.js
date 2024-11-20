import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'; 
import { Colors } from '@/constants/Colors';
import { Popins } from '@/constants/Popins';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons} from '@expo/vector-icons'; 
import ListListenMusic from './ListListenMusic';
import { getFormattedImageUrl } from '@/utils/getFormatted';
import { getSongs } from '@/services/getMusicApi';

const GroupTrendSong = ({items}) => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        if (items && items.songs) {
            getSongs().then(allSongs => {
                const albumSongs = allSongs.filter(song => items.songs.includes(song.id));
                setSongs(albumSongs);
            });
        }
    }, [items]);

    if (!items || !items.image_ablum) {
        return null;
    }

    return (
        <LinearGradient
         colors={['#1A3D5C', '#4A8CAA', '#F2A47C']}
         style={styles.container}
        >
            <View style={styles.header}>
                <View style={styles.imgContainer}>
                    <Image 
                        source={{uri: getFormattedImageUrl(items.image_ablum)}}
                        style={styles.img}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>Create various playlist using AI</Text>
                    <Text style={styles.context}>Musica Intelligence</Text>
                </View>
            </View>

            {/* Sổ các list */}
            <View style={styles.list}>
                <FlatList
                    data={songs}
                    renderItem={({ item }) => <ListListenMusic items={item}/>}
                    keyExtractor={item => Math.random().toString()}
                />
            </View>

            <View style={styles.btn}>
                <View style={styles.btnFunc}>
                    <TouchableOpacity>
                        <Ionicons name="play" size={20} color="white" style={[styles.icon, styles.play]}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons name="cast" size={20} color="white" style={styles.icon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="add" size={20} color="white" style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={20} color="white" style={styles.iconVer}/>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

export default GroupTrendSong

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 16,
        width: 300,
        marginRight: 16,
        position: 'relative',
    },

    header: {
        flexDirection: 'row',
        marginTop: 16,
        width: '74%',   
    },

    content: {   
        marginLeft: 16,
    },
    imgContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2)',
        padding: 2,
        width: 100,
        height: 100,
    },
    list: {
        flex: 1,
    },
    img: {
        borderRadius: 10,
        height: '100%',
        width: '100%',
    },
    title: {
        color: Colors.neutral.white,
        fontSize: Popins.Heading4.size,
        fontWeight: Popins.FontFamilies.SemiBold,
        fontFamily: Popins.FontBold,
    },
    context: {
        color: Colors.neutral.white,
        fontSize: 14,
        marginVertical: 12,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28,
        alignItems: 'center',
        
    },

    btnFunc: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 28,
    },

    play: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 8,
        borderRadius: 50,
    },
})