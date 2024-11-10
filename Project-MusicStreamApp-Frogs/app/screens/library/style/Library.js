// Date: 03/08/2021
// Note: Library Style

import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutral.gray,
    },

    bodyContent: {
        marginBottom: 40,
    },


    // Chung 

    listenTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    textH1: {
        fontSize: Popins.Heading4.size,
        fontWeight: 'bold',
    },

    btnMore: {
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 16,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Color: {
        color: Colors.neutral.white,
    },

    textH2: {
        fontSize: Popins.Heading6.size,
    },

    // Followings
    followings: {
        marginTop: 40,
        marginHorizontal: 20,
    },

    // Playlists
    playlists: {
        marginTop: 40,
        marginHorizontal: 20,
    },

    // Saved Clips
    savedClips: {
        marginTop: 40,
        marginHorizontal: 20,
    },

    // Saved videos
    savedVideos: {
        marginTop: 40,
        marginHorizontal: 20,
    },
})

export default styles