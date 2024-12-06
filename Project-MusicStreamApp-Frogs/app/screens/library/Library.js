import { Text, View, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import React from 'react'
import styles from './style/Library'
import Followings from '@/components/Followings'
import LiveMusicBottom from '@/components/LiveMusicBottom'
import Clips from '@/components/Clips'
import LastestVideos from '@/components/LastestVideos'
import Playlists from '@/components/PlayList'
import { getClips } from '@/services/getMusicApi';
import { getUserInfo } from '@/services/getUser';
import { useState, useEffect  } from 'react'
import { set } from 'firebase/database'

const Library = ({navigation }) => {
  const [clips, setClips] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [followings, setFollowings] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const clipsData = await getClips();
      setClips(clipsData);

      const userInfoData = await getUserInfo();
      if (userInfoData) {
        setUserInfo(userInfoData);
        setFollowings(userInfoData.follow || []);
        setPlaylists(userInfoData.playlist || []);
        setFavorites(userInfoData.favorite || []);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userInfo) {
      setFollowings(userInfo.follow || []);
      setPlaylists(userInfo.playlist || []);
      setFavorites(userInfo.favorite || []);
    }
  }, [userInfo]);

  console.log(JSON.stringify(userInfo));
  console.log(JSON.stringify(favorites));

  if (!userInfo) {
    return <Text>Loading...</Text>;
  }
  
  return (
    <View style={styles.container}>
       <ScrollView showsVerticalScrollIndicator={false} style={styles.bodyContent}>
       {/* Followings */}
        <View style={styles.followings}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Followings</Text>
            <TouchableOpacity style={styles.btnMore}
              onPress={() => navigation.navigate('ArtistProfile')}
            >
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
            <TouchableOpacity style={styles.btnMore} onPress={() => navigation.navigate('PlayListScreen')}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ data */}
          <FlatList
            data={favorites}
            renderItem={({ item }) => <Playlists playlist={item} />}
            keyExtractor={(item, index) => Math.random().toString()}
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
            data={clips}
            renderItem={({ item }) => <Clips items={item}/>}
            keyExtractor={(item, index) => index.toString()}  
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
