import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: 'height',
        backgroundColor: Colors.neutral.black
    },
    header: {
        flexDirection: 'row',
        width:0.8*width,
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom:70,
        height:0.2*height,
        
    },
    navigateLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        width: width,
        height: 0.5*height,
    },
    menu3: {
        width: 24,
        height: 24,
    },
    viewInputs: {
        height:'100%',
        marginTop: 20,
        width: '100%',
        height: '70%',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 56,
        borderColor: Colors.neutral.white,
        borderWidth: 1,
        borderRadius:12,
        paddingLeft: 20,
        color: Colors.neutral.white,
        fontSize: 16,
        marginVertical:6
    },
    context: {
        width: '80%',
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

    fonttext30: {
        fontSize: 33,
    },

    fonttext16: {
        fontSize: 18,
    },
    fonttext14: {
        fontSize: 14,
    },

    btn: {
        backgroundColor: '#1e1e1e',
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 20,
        marginBottom: '20%',
    },
    footer: {
        
        width:0.9* width,
        height:0.3*height,
        alignSelf: 'center',
    },
    footerText: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
    },
    footerImg: {
        height: 2,
    },
});

export default styles;