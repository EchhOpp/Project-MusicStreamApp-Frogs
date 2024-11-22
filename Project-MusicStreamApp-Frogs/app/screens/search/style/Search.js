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
        marginTop: 20,
        width: '96%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        height: 48,
        borderRadius: 50,
        alignSelf: 'center',
        color: Colors.neutral.white,
        padding: 4,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        paddingLeft: 20
    },
    fontSize16: {
        fontSize: 14
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
        width: '96%',
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
        width: '96%', 
        alignSelf: 'center',
        marginTop: 18,
        padding: 10,
    }

})

export default styles;