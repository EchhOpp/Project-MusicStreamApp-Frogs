import { StyleSheet, View, Text, FlatList, ImageBackground, ScrollView, TouchableOpacity,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ListListenMusic from '@/components/ListListenMusic';
import PlayList from '@/components/PlayList';

import styles from './style/Related'

const Related = () => {
    const data = [
        {
            id: 1,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'Until I Bleed Out',
            author: 'The Weeknd'
        },
        {
            id: 2,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'Blinding Lights',
            author: 'The Weeknd'
        },
        {
            id: 3,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'Save Your Tears',
            author: 'The Weeknd'
        },
        {
            id: 4,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'In Your Eyes',
            author: 'The Weeknd'
        },
    ];
    const data2 = [
        {
            id: 1,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'After Hours (Deluxe Edition)',
            author: 'The Weeknd'
        },
        {
            id: 2,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'Dawn FM',
            author: 'The Weeknd'
        },
        {
            id: 3,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'Starboy',
            author: 'The Weeknd'
        },
        {
            id: 4,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'Beauty Behind the Madness',
            author: 'The Weeknd'
        },
    ];
    const data3 = [
        {
            id: 1,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'Until I Bleed Out',
            author: 'The Weeknd'
        },
        {
            id: 2,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'Blinding Lights',
            author: 'The Weeknd'
        },
        {
            id: 3,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'Save Your Tears',
            author: 'The Weeknd'
        },
        {
            id: 4,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'In Your Eyes',
            author: 'The Weeknd'
        }
    ];
    return (
        <ImageBackground
            source={require('../../../assets/images/Imgtheme2.png')}
            style={styles.container}
        >
            <LinearGradient
                colors={['rgba(59, 62, 53,0.9)', 'rgba(24,21,16,1)', 'rgba(150,150,150,0.8)']}
                style={styles.gradientOverlay}
            >
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.Container}>
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.btndown}>
                                <AntDesign name="down" size={24} color="white" style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btn}>
                                <Feather name="more-vertical" size={24} color="white" style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        {/* Add more content here as needed */}
                        <View style={styles.RelatedSongs}>
                            <View style={styles.ItemsHeader}>
                                <Text style={styles.titles}>Related songs</Text>
                            </View>
                            <FlatList
                                data={data}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => <ListListenMusic items={item} />}
                                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                                style={styles.list}
                            />
                        </View>
                        <View style={styles.albums}>
                            <View style={styles.ItemsHeader}>
                                <Text style={styles.titles}>Albums</Text>
                                <TouchableOpacity style={styles.btnmore}>
                                    <Text style={styles.more}>more</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data2}
                                horizontal={true}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => <PlayList items={item} />}
                                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                                style={styles.list}
                            />
                        </View>
                        <View style={styles.listenagain}>
                            <View style={styles.ItemsHeader}>
                                <Text style={styles.titles}>Listen again</Text>
                            </View>
                            <FlatList
                                data={data}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item }) => <ListListenMusic items={item} />}
                                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                                style={styles.list}
                            />
                        </View>
                        <View style={styles.SimillarArtists}>
                            <View style={styles.ItemsHeader}>
                                <Text style={styles.titles}>Simillar Artists</Text>
                            </View>
                            <FlatList
                                data={data3}
                                keyExtractor={item => item.id.toString()}
                                horizontal={true}
                                renderItem={({ item }) => (
                                    <View style={styles.Artist}>
                                        <Image source={{ uri: item.image }} style={styles.image} />
                                        <Text style={styles.title}>{item.author}</Text>
                                    </View>
                                )
                                }
                                ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
                                style={styles.list}
                            />
                        </View>
                    </View>
                </ScrollView>
            </LinearGradient>
        </ImageBackground>
    )
}

export default Related

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginBottom: 120
//     },
//     gradientOverlay: {
//         flex: 1,
//     },
//     Container: {
//         marginHorizontal: 20,
//         marginTop: 40
//     },
//     header: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20
//     },
//     btndown: {
//         padding: 10,
//         backgroundColor: 'rgba(255,255,255,0.2)',
//         borderRadius: 50
//     },
//     list: {
//     },
//     ItemsHeader: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: 20
//     },
//     titles: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'white'
//     },
//     btnmore: {
//         borderColor: 'rgba(255, 255, 255, 0.2)',
//         borderWidth: 1,
//         borderRadius: 50,
//         paddingHorizontal: 16,
//         paddingVertical: 6,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     more: {
//         color: 'white',
//         fontSize: 16,
//     },
//     RelatedSongs: {
//         marginTop: 10
//     },
//     albums: {
//         marginTop: 20
//     },
//     listenagain: {
//         marginTop: 10
//     },
//     SimillarArtists: {
//         marginTop: 10
//     },
//     Artist: {
//         alignItems: 'center',
//         marginRight: 10
//     },
//     image: {
//         width: 80,
//         height: 80,
//         borderRadius: 50
//     },
//     title: {
//         fontSize: 16,
//         color: 'rgba(255, 255, 255, 0.8)',
//         width: 90,
//         textAlign: 'center'
//     }
// })