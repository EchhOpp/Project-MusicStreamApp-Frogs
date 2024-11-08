import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../../../constants/Colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
    },

    body: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    btn: {
        width: width * 0.9,
        height: '6%',
        backgroundColor: Colors.primary.main,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 20,
    },

    text: {
        color: Colors.neutral.white,
        fontSize: 20,
    },
    layout: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    colorLayout: {
        fontSize: 16,
        marginHorizontal: 5,
        color: 'rgba(255, 255, 255, 0.5)',
    },
    bottom: {
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },

    touchLogin: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    hor: {
        marginRight: 10,
    },

    btnLoginWith: {
        paddingVertical: '4%',
        paddingHorizontal: '12%',
        borderRadius: 50,
        marginVertical: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

});

export default styles;
