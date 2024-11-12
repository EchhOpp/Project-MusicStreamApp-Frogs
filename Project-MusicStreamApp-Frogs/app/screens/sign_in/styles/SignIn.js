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
    body: {
        flex: 3,
        marginTop: '16%',
        width: width,
        height: 0.5 * height,
    },
    menu3: {
        width: 24,
        height: 24,
    },
    viewInputs: {
        height: '80%',
        marginTop: 20,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 60,
        borderColor: '#7e7e7e',
        borderWidth: 1,
        borderRadius: 12,
        paddingLeft: 20,
        color: Colors.neutral.white,
        fontSize: 18,
        marginVertical: 8
    },
    context: {
        width: '80%',
    },
    colortext2: {
        color: 'rgba(255, 255, 255, 0.5)',
    },
    colortext: {
        color: Colors.neutral.white,

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
        height: '14%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 20,
        marginBottom: '12%',
    },

    btnfooter: {
        backgroundColor: '#1e1e1e',
        width: '100%',
        height: '34%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: '12%',
        marginBottom: '12%',
    },

    footer: {
        flex: 1,
        width: 0.9 * width,
        height: 0.3 * height,
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
    viewerror: {
        marginTop: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'

    },
    txterror: {
        color: '#fb4343'
    },
    imgerror: {
        marginRight: 8
    },
});

export default styles;