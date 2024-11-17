import { StyleSheet } from "react-native";
import { Popins } from '@/constants/Popins';
import { Colors } from '@/constants/Colors';


export const styles = StyleSheet.create({

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
        marginBottom: 20,
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
        height: 180,
        marginBottom: 20,
        marginHorizontal: 36,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
})