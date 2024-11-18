import { StyleSheet, View, Text, FlatList, ImageBackground,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import ListListenMusic from '@/components/ListListenMusic';
import styles from './style/Next';

const Next = () => {
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
        {
            id: 5,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'After Hours',
            author: 'The Weeknd'
        },
        {
            id: 6,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'Die For You',
            author: 'The Weeknd'
        },
        {
            id: 7,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'Starboy',
            author: 'The Weeknd'
        },
        {
            id: 8,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'I Don\'t Like It',
            author: 'The Weeknd'
        },
        {
            id: 9,
            image: 'https://i.scdn.co/image/ab67616d0000b273c5716278abba6a103ad13aa7',
            title: 'The Hills',
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
                {/* <ScrollView contentContainerStyle={styles.scrollViewContent}> */}
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
                        <FlatList
                            // scrollEnabled={false}
                            data={data}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item }) => <ListListenMusic items={item} />}
                            ItemSeparatorComponent={() => <View style={{height: 16}} />}
                            style={styles.list}
                        />
                    </View>
                {/* </ScrollView> */}
            </LinearGradient>
        </ImageBackground>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     gradientOverlay: {
//         flex: 1,
//     },
//     Container: {
//         marginHorizontal:20,
//         marginTop:40
//     },
//     header:{
//         flexDirection:'row',
//         justifyContent:'space-between',
//         alignItems:'center',
//         marginBottom:20
//     },
//     btndown:{
//         padding:10,
//         backgroundColor:'rgba(255,255,255,0.2)',
//         borderRadius:50
//     },
//     list:{
//         height:500
//     }
    
// });

export default Next;