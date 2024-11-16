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

const ArtissProfile = () => {
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
                                <TouchableOpacity style={[styles.btnc, styles.btnplay]}>
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
                                    <Text style={[styles.Color, styles.textH2,styles.marginv]}>The Highlights (Deluxe)</Text>
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
                        data={[1, 2, 3, 4, 5]}
                        keyExtractor={item => item.toString() + 'listenAgain'}
                        renderItem={({ item }) => <ListListenMusic />}
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
                        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                        renderItem={({ item }) => <ListSong />}
                        keyExtractor={item => item.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        renderItem={({ item }) => <ListSong />}
                        keyExtractor={item => item.toString()}
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
                        data={[1, 2, 3, 4, 5]}
                        renderItem={({ item }) => <Clips />}
                        keyExtractor={item => item.toString()}
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
                        data={[1, 2, 3, 4, 5]}
                        renderItem={({ item }) => <AlbumComponet />}
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
            </ScrollView>
            {/* Tab live in bottom */}
            <View style={styles.bottomNav}>
                <LiveMusicBottom />
            </View>
        </View>
        </GestureHandlerRootView>
    )
}

export default ArtissProfile

