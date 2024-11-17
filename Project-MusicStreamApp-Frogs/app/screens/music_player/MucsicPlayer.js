import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Popins } from '@/constants/Popins';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const MucsicPlayer = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/Imgtheme2.png')}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.content}>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.btndown}>
                            <AntDesign name="down" size={24} color="white" style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bodycontent}>
                        <View style={styles.component}>
                            <View style={styles.row}>
                                <View style={styles.rowitem}>
                                    <Text style={styles.title}>Until I Bleed Out</Text>
                                    <Text style={[styles.subTitle, styles.color2]}>The Weeknd</Text>
                                </View>
                                <TouchableOpacity style={[styles.row, styles.btnPlay]}>
                                    <Feather name="play" size={16} color="white" style={{ marginRight: 5 }} />
                                    <Text style={[styles.subTitle, styles.colorwhite]}>Video</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.component}>
                            <View style={styles.row}>
                                <View style={styles.viewicon}>
                                    <TouchableOpacity style={[styles.btnicon,styles.marginright]}>
                                        <AntDesign name="hearto" size={18} color="white" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.btnicon,styles.marginright]}>
                                        <Feather name="bookmark" size={18} color="white" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.btnicon,styles.marginright]}>
                                        <AntDesign name="sharealt" size={18} color="white" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.btnicon,styles.marginright]}>
                                        <Feather name="download" size={18} color="white" />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={[styles.btnicon]}>
                                    <Feather name="more-vertical" size={18} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.component}>
                            <Image source={require('../../../assets/images/lineLoading.png')} style={{ width: '100%' }} />
                            <View style={[styles.row]}>
                                <Text style={[styles.subTitle, styles.color2]}>2:53</Text>
                                <Text style={[styles.subTitle, styles.color2]}>5:01</Text>
                            </View>
                        </View>
                        <View style={styles.component}>
                            <View style={styles.controllplayer}>
                                <TouchableOpacity style={[styles.btnicon]}>
                                    <FontAwesome name="random" size={18} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnicon]}>
                                    <Ionicons name="play-skip-back-sharp" size={20} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnicon]}>
                                <FontAwesome5 name="play" size={24} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnicon]}>
                                    <Ionicons name="play-skip-forward" size={20} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.btnicon]}>
                                    <MaterialIcons name="replay" size={18} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </ImageBackground>
            <Text>Music Player</Text>
        </View>
    )
}

export default MucsicPlayer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutral.gray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 40,
    },
    btndown: {
        backgroundColor: 'rgba(255, 255, 256, 0.3)',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodycontent: {
        flex: 1,
        top: 300,
    },
    component: {
        marginHorizontal: 20,
        marginTop: 28,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    colorwhite: {
        color: Colors.neutral.white,
    },
    color2: {
        color: 'rgba(255, 255, 255, 0.5)',
    },
    rowitem: {
        marginVertical: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.neutral.white,
        marginVertical: 5,
    },
    subTitle: {
        fontSize: 14,
    },
    btnPlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        // padding: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewicon: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnicon: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        padding: 14,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    marginright:{
        marginRight: 10,
    },
    controllplayer: {
        marginHorizontal: 36,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
    },

})