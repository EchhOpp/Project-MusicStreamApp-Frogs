import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
// import styles from './style/ArtissProfile'
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
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'
import FeaturedOnComponent from './FeaturedOnComponent';

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
                                    <View style={styles.itemkey}>
                                        <Text style={[styles.Color, styles.textH2]}>{item.name}</Text>
                                    </View>
                                )}
                                keyExtractor={item => item.id.toString()}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            />
                            <TouchableOpacity style={styles.Album}>
                                <View>
                                    <Text style={[styles.color2, styles.textH3]}>LATEST RELEASE</Text>
                                    <Text style={[styles.Color, styles.textH2]}>The Highlights (Deluxe)</Text>
                                    <Text style={[styles.color2, styles.textH3]}>Album 2024</Text>
                                </View>
                                <Image style={styles.imgAlbum} source={require('@/assets/images/afterhours.png')} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.popular}>
                    <View style={styles.popularTitle}>
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
                <View style={styles.popular}>
                    <View style={styles.popularTitle}>
                        <Text style={[styles.Color, styles.textH1]}>Popular</Text>
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
                <View style={styles.popular}>
                    <View style={styles.popularTitle}>
                        <Text style={[styles.Color, styles.textH1]}>Popular</Text>
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
                <View style={styles.popular}>
                    <View style={styles.popularTitle}>
                        <Text style={[styles.Color, styles.textH1]}>Popular</Text>
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
                <View style={styles.popular}>
                    <View style={styles.popularTitle}>
                        <Text style={[styles.Color, styles.textH1]}>Popular</Text>
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
                <View style={styles.popular}>
                    <View style={styles.popularTitle}>
                        <Text style={[styles.Color, styles.textH1]}>Popular</Text>
                        <TouchableOpacity style={styles.btnMore}>
                            <Text style={[styles.Color, styles.textH2]}>More</Text>
                        </TouchableOpacity>
                    </View>
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
                <View style={styles.popular}>
                    <View style={styles.popularTitle}>
                        <Text style={[styles.Color, styles.textH1]}>Popular</Text>
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
                <View style={styles.popular}>
                    <View style={styles.popularTitle}>
                        <Text style={[styles.Color, styles.textH1]}>Popular</Text>
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

            </ScrollView>
            {/* Tab live in bottom */}
            <View style={styles.bottomNav}>
                <LiveMusicBottom />
            </View>
        </View>
    )
}

export default ArtissProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutral.gray,
    },
    headerContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    imageBackground: {
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 40,
    },
    bodyContent: {
        marginTop: 400,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    Color: {
        color: Colors.neutral.white,
    },
    color2: {
        color: 'rgba(255, 255, 255, 0.64)',
    },
    textH1: {
        // fontSize: Popins.Heading6.size,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textH2: {
        // fontSize: 16,
        fontSize: Popins.Heading6.size
    },
    textH3: {
        // fontSize: Popins.Heading5.size
        fontSize: 12
    },
    titles: {

    },
    btncontrol: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    btnc: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 3,
    },
    btnfollowing: {
        width: '68%',
    },
    btnplay: {
        backgroundColor: Colors.primary.main,
    },
    itemkey: {
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
        padding: 10,
        borderRadius: 30,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Album: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 20,
    },
    imgAlbum: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    popular: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    popularTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})