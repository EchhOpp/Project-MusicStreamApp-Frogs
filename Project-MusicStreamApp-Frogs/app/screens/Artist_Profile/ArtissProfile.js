import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'

import ArtistProfileLeft from './ArtistProfileLeft'
import ArtistProfileRight from './ArtistProfileRight'
import { Feather, FontAwesome } from '@expo/vector-icons';
import ListListenMusic from '@/components/ListListenMusic'
import ListSong from '@/components/ListSong'
import Clips from '@/components/Clips'
import AlbumComponet from './AlbumComponet';
import GroupTrendSong from '@/components/GroupTrendSong'
import LiveMusicBottom from '@/components/LiveMusicBottom'
import LastestVideos from '@/components/LastestVideos'
import FeaturedOnComponent from './FeaturedOnComponent';
import styles from '../Artist_Profile/style/ArtissProfile'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ArtistComponet1st from './ArtistComponet1st';
import { useNavigation } from '@react-navigation/native';
import { getSongs, getAlbums, getClips, updateCurrentSong} from '@/services/getMusicApi';
import { useEffect, useState } from 'react';
import { set } from 'firebase/database';

const ArtissProfile = () => {
    const navigation = useNavigation();
    const name = "The weeknd";
    const data = [
        {
            id: 1,
            name: 'Top 100'
        },
        {
            id: 2,
            name: 'Clips'
        },
        {
            id: 3,
            name: 'Singles'
        },
        {
            id: 4,
            name: ' Albumms'
        },
        {
            id: 5,
            name: 'Chíps'
        },
    ]
    const [songs, setSongs] = useState([]);
    const [clips, setClips] = useState([]);
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            try {
                const songdb = await getSongs();
                const clipdb = await getClips();
                const albumdb = await getAlbums();
                console.log('albums', albumdb);
                // setSongs(songs);
                const songsData = songdb.filter(song => song.author === name);
                setSongs(songsData);
                const clipsData = clipdb.filter(clip => clip.artist.toLowerCase() === name.toLowerCase());
                setClips(clipsData);
                setAlbums( albumdb.filter(album => album.artist.toLowerCase() === name.toLowerCase()));
                

            } catch (error) {
                console.error('Error loading songs:', error);
            }
        }
        loadData();
    }, []);
    return (
        <GestureHandlerRootView>
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <View style={styles.headerContent}>
                        <ImageBackground
                            source={require('@/assets/images/Imgtheme.png')}
                            style={styles.imageBackground}
                        >
                            <View style={styles.header}>
                                <ArtistProfileLeft />
                                <ArtistProfileRight />
                            </View>

                            <View style={styles.bodyContent}>
                                <View style={styles.titles}>
                                    <Text style={[styles.Color, styles.textH1]}>The Weeknd</Text>
                                    <Text style={[styles.color2, styles.textH2]}>123,345,749 monthly listeners</Text>
                                </View>
                                <View style={styles.btncontrol}>
                                    <TouchableOpacity style={[styles.btnc, styles.btnfollowing]}>
                                        <Text style={[styles.Color, styles.textH2]}>Following</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.btnc]}>
                                        <Feather name="repeat" size={24} color="white" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.btnc, styles.btnplay]}
                                        onPress={() => navigation.navigate('MucsicPlayer')}
                                    >
                                        <FontAwesome name="play" size={24} color="white" />
                                    </TouchableOpacity>
                                </View>
                                <FlatList
                                    style={{ marginTop: 20 }}
                                    data={data}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity style={styles.itemkey}>
                                            <Text style={[styles.Color, styles.textH2]}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )}
                                    keyExtractor={item => item.id.toString()}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                />
                                <TouchableOpacity style={styles.Album}>
                                    <View>
                                        <Text style={[styles.color2, styles.textH3]}>LATEST RELEASE</Text>
                                        <Text style={[styles.Color, styles.textH2, styles.marginv]}>The Highlights (Deluxe)</Text>
                                        <Text style={[styles.color2, styles.textH3]}>Album 2024</Text>
                                    </View>
                                    <Image style={styles.imgAlbum} source={require('@/assets/images/afterhours.png')} />
                                </TouchableOpacity>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.ItemComponent}>
                        <View style={styles.ItemComponentTitle}>
                            <Text style={[styles.Color, styles.textH1]}>Popular</Text>
                            <TouchableOpacity style={styles.btnMore}>
                                <Text style={[styles.Color, styles.textH2]}>More</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            scrollEnabled={false}
                            data={songs}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => <ListListenMusic items={item} />}
                        />
                    </View>
                    <View style={styles.ItemComponent}>
                        <View style={styles.ItemComponentTitle}>
                            <Text style={[styles.Color, styles.textH1]}>Singles</Text>
                            <TouchableOpacity style={styles.btnMore}>
                                <Text style={[styles.Color, styles.textH2]}>More</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            // scrollEnabled={false}
                            style={{ marginTop: 20 }}
                            data={songs}
                            renderItem={({ item }) => <ListSong items={item} />}
                            keyExtractor={item => item.id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        <FlatList
                            data={songs}
                            renderItem={({ item }) => <ListSong items={item} />}
                            keyExtractor={item => item.id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />

                    </View>
                    <View style={styles.ItemComponent}>
                        <View style={styles.ItemComponentTitle}>
                            <Text style={[styles.Color, styles.textH1]}>Clips</Text>
                            <TouchableOpacity style={styles.btnMore}>
                                <Text style={[styles.Color, styles.textH2]}>More</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={clips}
                            renderItem={({ item }) => <Clips items={item}/>}
                            keyExtractor={item => item.id.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.ItemComponent}>
                        <View style={styles.ItemComponentTitle}>
                            <Text style={[styles.Color, styles.textH1]}>Albums</Text>
                            <TouchableOpacity style={styles.btnMore}>
                                <Text style={[styles.Color, styles.textH2]}>More</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={albums}
                            renderItem={({ item }) => <AlbumComponet items={item} />}
                            keyExtractor={item => item.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.ItemComponent}>
                        <View style={styles.ItemComponentTitle}>
                            <Text style={[styles.Color, styles.textH1]}>From your library</Text>
                            <TouchableOpacity style={styles.btnMore}>
                                <Text style={[styles.Color, styles.textH2]}>More</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={[1, 2, 3, 4, 5]}
                            renderItem={({ item }) => <ListSong />}
                            keyExtractor={item => item.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.ItemComponent}>
                        <FlatList
                            // scrollEnabled={false}
                            data={[1, 2, 3, 4, 5]}
                            renderItem={({ item }) => <GroupTrendSong />}
                            keyExtractor={item => item.toString()}
                            horizontal={true}
                            style={{ marginTop: 30 }}
                            showsHorizontalScrollIndicator={false}
                        />

                    </View>
                    <View style={styles.ItemComponent}>
                        <View style={styles.ItemComponentTitle}>
                            <Text style={[styles.Color, styles.textH1]}>Featured on</Text>
                            <TouchableOpacity style={styles.btnMore}>
                                <Text style={[styles.Color, styles.textH2]}>More</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            // scrollEnabled={false}
                            data={[1, 2, 3, 4, 5]}
                            renderItem={({ item }) => <FeaturedOnComponent />}
                            keyExtractor={item => item.toString()}
                            horizontal={true}
                            style={{ marginTop: 30 }}
                            showsHorizontalScrollIndicator={false}
                        />

                    </View>
                    <View style={styles.ItemComponent}>
                        <View style={styles.ItemComponentTitle}>
                            <Text style={[styles.Color, styles.textH1]}>Latest videos</Text>
                            <TouchableOpacity style={styles.btnMore}>
                                <Text style={[styles.Color, styles.textH2]}>More</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={[1, 2, 3, 4, 5]}
                            renderItem={({ item }) => <LastestVideos />}
                            keyExtractor={item => item.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.ItemComponent}>
                        <View style={styles.ItemComponentTitle}>
                            <Text style={[styles.Color, styles.textH1]}>Simillar Artists</Text>

                        </View>
                        <FlatList
                            data={[1, 2, 3, 4, 5]}
                            renderItem={({ item }) => (
                                <View style={styles.similarArtist}>
                                    <Image source={require('@/assets/images/similarArtist.png')} style={styles.imgSimilar} />
                                    <Text style={[styles.color2, styles.textH2]}>Billie Eilish</Text>
                                </View>
                            )}
                            keyExtractor={item => item.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.ItemComponent}>
                        <ArtistComponet1st />
                    </View>
                </ScrollView>
            </View>
        </GestureHandlerRootView>
    )
}

export default ArtissProfile

