import { Text, View, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import React from 'react'
import styles from './style/Library'
import Followings from '@/components/Followings'
import LiveMusicBottom from '@/components/LiveMusicBottom'
import Clips from '@/components/Clips'
import LastestVideos from '@/components/LastestVideos'
import Playlists from '@/components/PlayList'

const Library = ({navigation }) => {
  return (
    <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false} style={styles.bodyContent}>
       {/* Followings */}
        <View style={styles.followings}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Followings</Text>
            <TouchableOpacity style={styles.btnMore}>
              <Text style={[styles.Color, styles.textH2]}>View all</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ list data */}
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <Followings />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Playlists */}
        <View style={styles.playlists}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Playlists</Text>
            <TouchableOpacity style={styles.btnMore} onPress={
              () => navigation.navigate('PlayListScreen')
            }>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ data */}
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <Playlists />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Saved Clips */}
        <View style={styles.savedClips}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Saved Clips</Text>
            <TouchableOpacity 
                style={styles.btnMore}
                onPress={() => navigation.navigate('SavedClips')}
                >
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ data */}
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <Clips />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Saved videos */}
        <View style={styles.savedVideos}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Saved Videos</Text>
            <TouchableOpacity style={styles.btnMore}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ data */}
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <LastestVideos />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
       </ScrollView>

       {/* Tab live in bottom */}
      <View style={styles.bottomNav}>
        <LiveMusicBottom />
      </View>
    </View>
  )
}

export default Library
