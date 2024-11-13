import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutral.gray,
    },
    viewFunction: {
        marginTop: 50,
        marginHorizontal: 30,
        flex: 1
    },
    textH3: {
        // fontSize: Popins.Heading5.size,
        fontSize: 19,
        fontWeight: '550',
    },
    textH4: {
        // fontSize: Popins.Heading6.size,
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 5
    },
    Color: {
        color: Colors.neutral.white,
    },
    functionitem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        paddingBottom: 10,
    },
    iconleft: {
        marginRight: 10
    },
})

export default styles