import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { Popins } from '@/constants/Popins';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {styles} from './style/MucsicPlayer'
import { useNavigation } from '@react-navigation/native';


const MucsicPlayer = () => {
    const navigation = useNavigation();
    return (
        
        <View style={styles.container}>
            <ImageBackground
                source={require('../../../assets/images/Imgtheme2.png')}
            >
                <ScrollView style={styles.scrollview}>
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
                                    <TouchableOpacity 
                                            onPress={() => navigation.navigate('Lyrics')}
                                            style={[styles.btnicon,styles.marginright]}>
                                        <Feather name="download" size={18} color="white" />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity 
                                    onPress={() => navigation.navigate('Next')}
                                    style={[styles.btnicon]}>
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
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default MucsicPlayer