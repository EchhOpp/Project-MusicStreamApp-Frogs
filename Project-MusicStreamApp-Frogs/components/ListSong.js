import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import { Popins } from '../constants/Popins'

const ListSong = ({items}) => {
    if (!items) 
        return null;
    return (
        <View style={styles.container}>
            <Image 
                source={{ uri: items.image }} 
                style={styles.img}
                width={92}
                height={92}
            />
            <Text numberOfLines={1} style={styles.nameMusic}>{items.title}</Text>
            <Text style={styles.nameAuthor}>{items.author}</Text>
        </View>
  )
}

export default ListSong

const styles = StyleSheet.create({
    container: {
        marginTop: 16,
        marginRight: 20,
        position: 'relative',
        overflow: 'hidden',
        width: 92
    },

    img: {
        borderRadius: 10,
    },
    nameMusic: {
        color: Colors.neutral.white,
        fontSize: 14,
        marginVertical: 4,
    },
    nameAuthor: {
        color: Colors.neutral.rgba3,
        fontSize: 12,
        marginTop: -2
    },
})