import { StyleSheet } from "react-native";
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

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
        marginBottom: 20,
    },
    bodyContent: {
        marginTop: 400,
        marginHorizontal: 20,
        marginBottom: 24,
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
        // fontSize: Popins.Heading6.size
        fontSize: 15,
    },
    textH3: {
        // fontSize: Popins.Heading5.size
        fontSize: 12
    },
    marginv:{
        marginVertical: 10,
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
    ItemComponent: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    ItemComponentTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
})

export default styles;