import { View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import styles from './style/Home'
import ListListenMusic from '@/components/ListListenMusic';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
        <View style={styles.listenAgain}>
            <View style={styles.listenTitle}>
                <Text style={[styles.Color, styles.textH1]}>Listen again</Text>
                <TouchableOpacity style={styles.btnMore}>
                    <Text style={[styles.Color, styles.textH2]}>More</Text>
                </TouchableOpacity>
            </View>
            
            {/* Sổ list data */}
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={({ item }) => <ListListenMusic />}
                keyExtractor={item => item.toString()}
            />
        </View>
    </ScrollView>
  )
}

export default Home