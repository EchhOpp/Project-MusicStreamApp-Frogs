import { StyleSheet } from 'react-native'
import { Popins } from '@/constants/Popins';
import { Colors } from '@/constants/Colors';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.neutral.gray,
        position: 'relative',
    },
    searchInput: {
        marginTop: 36,
        width: '90%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        height: 50,
        borderRadius: 48,
        alignSelf: 'center',
        color: Colors.neutral.white,
        padding: 20,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.1)'
    },
    fontSize16: {
        fontSize: 16
    },
    fontSize14: {
        fontSize: 14,
        fontWeight: '500'
    },
    whiteColor: {
        color: Colors.neutral.white
    },
    viewCriteria: {
        marginTop: 18,
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemCriteria: {
        paddingHorizontal: 18,
        paddingVertical: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginHorizontal: 3,
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'rgba(255, 255, 255, 0.1)'
    },
    flastListStyle: {
        width: '90%', 
        alignSelf: 'center',
        marginTop: 18,
    }

})

export default styles;