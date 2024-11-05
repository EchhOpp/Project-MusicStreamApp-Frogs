import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: Colors.neutral.black
    },
    header: {
        width: width,
        alignItems: 'flex-start',
        height: 0.15 * height,
        padding: 20,
        marginTop: 20,
    },
    steps: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 26,
    },
    step: {
        width: '48%',
        height: 2,
        backgroundColor: Colors.neutral.white,
        borderRadius: 10,

    },
    txtHeader: {
        color: Colors.neutral.white,
        width: '80%',
        fontWeight: 'bold',
    },
    choose: {
        width: width,
        marginTop: 12,
        padding: 20,
    },
    txtInput: {
        width: '100%',
        height: 48,
        borderRadius: 48,
        backgroundColor: "#1e1e1e",
        paddingLeft: 20,
        color: Colors.neutral.white,
        marginBottom:10
    },
    litsItem: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    itemN: {
        color: Colors.neutral.white,
        paddingHorizontal: 24,
        paddingVertical: 10,
        backgroundColor: '#1e1e1e',
        borderRadius: 20,
        borderWidth: 1,
        marginHorizontal: 4,

    },
    litsAva:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemAva:{
        width: '30%',
        alignItems: 'center',
        height: 128,
    },
    avaImage:{
        height: 130,
        width: 130,
    },
    
    Artists:{
        fontWeight: 'bold',
        color: Colors.neutral.white,
    },

    colortext2: {
        color: Colors.neutral.white,
    },
    colortext: {
        color: Colors.neutral.white,
    },

    boldtext: {
        fontWeight: '500',
    },


    fonttext16: {
        fontSize: 16,
    },
    fonttext14: {
        fontSize: 14,
    },
    fonttext24: {
        fontSize: 24,

    },
    fonttext12: {
        fontSize: 12,
    },

    btn: {
        marginTop: 50,
        backgroundColor: '#df3132',
        width: '85%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 50,
        alignSelf: 'center',
    },
});

export default styles;