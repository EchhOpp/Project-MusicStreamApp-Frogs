import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style/Settings'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Settings = () => {
    const dataFuntion = [
        {
            id: 1,
            name: 'General',
            des: 'Restriction mode - Caption'
        },
        {
            id: 2,
            name: 'Data saving',
            des: 'Mobile data and Wi-Fi usage'
        },
        {
            id: 3,
            name: 'Playback',
            des: 'Equalizer - External devices'
        },
        {
            id: 4,
            name: 'Download & storage',
            des: 'Storage - Device files'
        },
        {
            id: 5,
            name: 'Notifications',
            des: 'Recommendation notifications'
        },
        {
            id: 6,
            name: 'Appearances',
            des: 'Dark mode settings'
        },
        {
            id: 7,
            name: 'Privacy',
            des: 'Watch history - Account privacy'
        },
        {
            id: 8,
            name: 'Recommendations',
            des: 'Liked music'
        },
        {
            id: 9,
            name: 'About Musica',
            des: 'Terms of Service'
        }
    ]


    return (
        <View style={styles.container}>
            <View style={styles.viewFunction}>
                <FlatList
                    data={dataFuntion}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.functionitem}>
                            <View style={styles.functionname}>
                                <Text style={[styles.Color, styles.textH3]}>{item.name}</Text>
                                <Text style={styles.textH4}>{item.des}</Text>
                            </View>
                            <AntDesign name="right" size={14} color="rgba(255, 255, 255, 0.5)" style={styles.iconleft} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id.toString()}
                    style={{ flex: 1 }}
                />
            </View>
        </View>
    )
}

export default Settings