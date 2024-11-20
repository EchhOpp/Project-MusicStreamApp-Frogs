import { StyleSheet } from 'react-native'
import { Popins } from '@/constants/Popins';
import { Colors } from '@/constants/Colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 120
    },
    gradientOverlay: {
        flex: 1,
    },
    Container: {
        marginHorizontal: 20,
        marginTop: 40
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    btndown: {
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 50
    },
    list: {
    },
    ItemsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    titles: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    btnmore: {
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 16,
        paddingVertical: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    more: {
        color: 'white',
        fontSize: 16,
    },
    RelatedSongs: {
        marginTop: 10
    },
    albums: {
        marginTop: 20
    },
    listenagain: {
        marginTop: 10
    },
    SimillarArtists: {
        marginTop: 10
    },
    Artist: {
        alignItems: 'center',
        marginRight: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    title: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        width: 90,
        textAlign: 'center'
    }
})

export default styles;
