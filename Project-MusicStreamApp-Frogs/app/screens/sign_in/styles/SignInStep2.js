import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../../../constants/Colors'

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
        paddingHorizontal: 20,
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
        borderRadius: 10,
    },
    colorNoActive: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
    },
    colorActive: {
        backgroundColor: Colors.primary.main
    },
    txtHeader: {
        color: Colors.neutral.white,
        width: '100%',
        fontWeight: 'bold',
        paddingHorizontal: 20,
    },
    content:{
        width: width,
        height: 0.65 * height,
        paddingHorizontal: 40,
        marginTop: 30,
    },
    contenttext: {
        marginTop: 10,
        width: '100%',
    },
    itemContent: {
        width: '100%',
        marginVertical: 30,
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
        marginTop: 30,
        backgroundColor: '#df3132',
        width: '85%',
        paddingVertical: '4%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 50,
        alignSelf: 'center',
    },
});

export default styles;