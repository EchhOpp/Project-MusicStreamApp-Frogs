import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { Colors } from '../../../../constants/Colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: 'height',
        backgroundColor: Colors.neutral.black
    },
    header: {
        flexDirection: 'row',
        width: 0.8 * width,
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 50,
        height: 0.2 * height,

    },
    navigateLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    body: {
        flex: 3,
        width: width,
        height: 0.5 * height,
    },
    menu3: {
        width: 24,
        height: 24,
    },
    viewInputs: {
        marginTop: '16%',
        width: '100%',
        height: '60%',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
    },

    textInput: {
        width: '100%',
        height: 60,
        borderColor: '#7e7e7e',
        borderWidth: 1,
        borderRadius: 16,
        paddingLeft: 20,
        color: Colors.neutral.white,
        fontSize: 16,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        width: '100%',
        height: 60,
        paddingLeft: 10,
        color: Colors.neutral.white,
        fontSize: 16,
    },

    icon: {
        marginRight: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
    },

    btnSignUp: {
        backgroundColor: 'rgba(223, 49, 49, 0.8)',
        width: '100%',
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 20,
    },
    colortext2: {
        color: Colors.neutral.white,
    },
    colortext: {
        color: 'rgba(225, 225, 225, 0.6)',
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

    btn: {
        backgroundColor: '#1e1e1e',
        width: '100%',
        height: 54,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 20,
        marginBottom: '20%',
    },
    footer: {
        flex: 1,
        width: 0.9 * width,
        height: 0.3 * height,
        alignSelf: 'center',
        marginTop: '20%',
    },
    footerText: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    footerImg: {
        height: 2,
    },
});

export default styles;