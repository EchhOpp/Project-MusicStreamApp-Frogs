import { StyleSheet, ActivityIndicator} from 'react-native'
import { Popins} from '@/constants/Popins';
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: Colors.neutral.gray,
    },

    bodyContent: {
        flex: 1,
        marginBottom: 40,
    },

    bottomNav: {
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
    },

    // Header
    listenAgain: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    listenTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    textH1: {
        fontSize: Popins.Heading4.size,
        fontWeight: Popins.FontFamilies.SemiBold,
        fontFamily: Popins.FontBold,
    },

    textH2: {
        fontSize: Popins.Heading6.size,
    },

    btnMore: {
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 12,
        paddingVertical: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Color: {
        color: Colors.neutral.white,
    },

    // New releases
    newReleases: {
        marginTop: 40,
        marginHorizontal: 20,
    },

    // Clips
    clips: {
        marginTop: 30,
        marginHorizontal: 20,
    },

    // Trending songs
    trending: {
        marginTop: 40,
        marginHorizontal: 20,
    },

    // Quick pick
    quickPicks: {
        marginTop: 40,
        marginHorizontal: 20,
    },

    // Recommended
    recommendedAlbums: {
        marginTop: 40,
        marginHorizontal: 20,
    },

    // fromYourLibrary
    fromYourLibrary: {
        marginTop: 40,
        marginHorizontal: 20,
    },

    // Clips count
    clipsCount: {
        marginTop: 40,
        marginHorizontal: 20,
    },

    // Forgotten favorites
    forgottenFavorites: {
        marginTop: 40,
        marginHorizontal: 20,
    },

    // Latest videos
    latestVideos: {
        marginTop: 40,
        marginHorizontal: 20,
    },

    // Mood & genre
    moodGenres: {
        marginTop: 40,
        marginHorizontal: 20,
    },
})

export default styles;