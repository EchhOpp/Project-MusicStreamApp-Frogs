import { StyleSheet } from "react-native";
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutral.gray,
    },

    titles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 40,
    },
    bottomNav: {
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
    },

    bodyContent: {
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 10,
    },

    textH1: {
        fontSize: Popins.Heading4.size,
        fontWeight: 'bold',
    },

    Color: {
        color: Colors.neutral.white,
    },

})
export default styles