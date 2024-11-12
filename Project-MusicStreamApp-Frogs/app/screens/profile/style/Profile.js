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

    textH2: {
        fontSize: Popins.Heading6.size,
    },
    viewProfile:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
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
    }


})

export default styles