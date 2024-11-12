import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutral.gray,
    },
    Color: {
        color: Colors.neutral.white,
    }, 
    
    textH1: {
        fontSize: Popins.Heading4.size,
        fontWeight: 'bold',
    },
    textH3: {
        // fontSize: Popins.Heading5.size,
        fontSize:19,
        fontWeight: '550',
    },
    textH4: {
        // fontSize: Popins.Heading6.size,
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 5
    },

    textH2: {
        fontSize: Popins.Heading6.size,
    },
    viewProfile:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    profileImage:{
        width: 88,
        height: 88,
        borderRadius: 50,
        marginVertical: 20,
    },
    profileEmail:{
        color: 'rgba(255, 255, 255, 0.5)',
        marginTop: 10
    },
    viewRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 10
    },
    viewFollower2:{
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 25
    },
    btnedit:{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: '75%',
        height: 46,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnShare:{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 50,
        height: 48,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    functions:{
        marginTop: 20,
        marginHorizontal: 30,
    },
    functionitem:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    iconf:{
        marginRight: 14,
        paddingHorizontal: 12,
        paddingVertical: 13,
        borderRadius: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
    },
    functiondes:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        paddingBottom: 10,
    },


})

export default styles