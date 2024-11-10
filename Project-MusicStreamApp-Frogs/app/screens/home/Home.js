import { View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import React from 'react'
import styles from './style/Home'
import ListListenMusic from '@/components/ListListenMusic';
import NewReleases from '@/components/NewReleases';
import Clips from '@/components/Clips';

const Home = (
    {navigation}
) => {
  return (
    <ScrollView style={styles.container}
        showsVerticalScrollIndicator={false}
    >
    
    {/* List again */}
        <View style={styles.listenAgain}>
            <View style={styles.listenTitle}>
                <Text style={[styles.Color, styles.textH1]}>Listen again</Text>
                <TouchableOpacity style={styles.btnMore}>
                    <Text style={[styles.Color, styles.textH2]}>More</Text>
                </TouchableOpacity>
            </View>

            {/* Sổ list data */}
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => <ListListenMusic />}
                keyExtractor={item => item.toString()}
            />
        </View>

    {/* New releases */}
        <View style={styles.newReleases}>
            <View style={styles.listenTitle}>
                <Text style={[styles.Color, styles.textH1]}>New releases</Text>
                <TouchableOpacity style={styles.btnMore}>
                    <Text style={[styles.Color, styles.textH2]}>More</Text>
                </TouchableOpacity>
            </View>

            {/* Sổ các new releases */}
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => <NewReleases />}
                keyExtractor={item => item.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    
    {/* Clips */}
        <View style={styles.clips}>
            <View style={styles.listenTitle}>
                <Text style={[styles.Color, styles.textH1]}>Clips</Text>
                <TouchableOpacity style={styles.btnMore}>
                    <Text style={[styles.Color, styles.textH2]}>More</Text>
                </TouchableOpacity>
            </View>

            {/* Sổ các clips */}
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => <Clips />}
                keyExtractor={item => item.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    </ScrollView>
  )
}

export default Home