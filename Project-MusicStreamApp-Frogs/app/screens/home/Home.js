import { View, Text, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import React, {useState, useEffect}from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from './style/Home';
import ListListenMusic from '../../../components/ListListenMusic';
import NewReleases from '@/components/NewReleases';
import Clips from '@/components/Clips';
import ListSong from '@/components/ListSong';
import GroupTrendSong from '@/components/GroupTrendSong';
import LastestVideos from '@/components/LastestVideos';
import MoodGenres from '@/components/MoodGenres';
import LiveMusicBottom from '../../../components/LiveMusicBottom';
import * as SplashScreen from 'expo-splash-screen';
import useLoadFonts from '@/hooks/useLoadFonts';
import { getSongs, getAlbums, getClips, updateCurrentSong} from '@/services/getMusicApi';
import { getGenre } from '@/services/ChooseMusic';
import { getRandomColor } from '@/utils/getRandomColor';
import getKey from '@/utils/getKey';
import { getUserInfo, updateUserInformation } from '@/services/getUser';

SplashScreen.preventAutoHideAsync();


const Home = ({navigation}) => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [clips, setClips] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { loaded, error } = useLoadFonts();
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        const songsArray = await getSongs();
        if (!isMounted) return;
        
        const albumsArray = await getAlbums();
        if (!isMounted) return;
        
        const clipsArray = await getClips();
        if (!isMounted) return;
        
        const genreList = await getGenre();
        if (!isMounted) return;

        setSongs(songsArray);
        setAlbums(albumsArray);
        setClips(clipsArray);
        setGenres(genreList);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
          SplashScreen.hideAsync();
        }
      }
    };

    loadData();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, []);

  if (!loaded && !error) {
    return null;
  }

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'}}>
        <ActivityIndicator size="large" color="#1DB954" />
      </View>
    );
  }
  
  const handleSongPress = (song) => {
    try {
      if (!song.mp_audio) {
        console.error("Song missing mp3 URL");
        return;
      }
      updateCurrentSong(song);
    } catch (error) {
      console.error("Error updating current song:", error);
    }
  };

  const handleMenuItemPress = async (action, song) => {
    try {
      // Lấy thông tin người dùng hiện tại
      const userInfo = await getUserInfo();
  
      if (!userInfo) {
        console.error("Không thể lấy thông tin người dùng.");
        return;
      }
  
      // Chuẩn bị dữ liệu cập nhật
      let updatedFavorite = userInfo.favorite || [];
      let updatedPlaylist = userInfo.playlist || [];
      let updatedQueue = userInfo.queue || [];
  
      // Xử lý từng hành động
      switch (action) {
        case 'Add to favorites':
          // Kiểm tra xem bài hát đã có trong danh sách chưa
          if (!updatedFavorite.some(item => item.id === song.id)) {
            updatedFavorite.push(song);
          }
          break;
  
        case 'Add to playlist':
          if (!updatedPlaylist.some(item => item.id === song.id)) {
            updatedPlaylist.push(song);
          }
          break;
  
        case 'Add to queue':
          if (!updatedQueue.some(item => item.id === song.id)) {
            updatedQueue.push(song);
          }
          break;
  
        default:
          console.warn("Unknown action:", action);
          return;
      }
  
      // Cập nhật thông tin người dùng trong Firebase
      const userData = {
        favorite: updatedFavorite,
        playlist: updatedPlaylist,
        queue: updatedQueue,
      };
  
      console.log("Updated user data:", userData);
  
      const updateResult = await updateUserInformation(userData);
      if (updateResult) {
        console.log("User data updated successfully.");
      } else {
        console.error("Failed to update user data.");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <ScrollView style={styles.bodyContent}>
        {/* List again */}
        <View style={styles.listenAgain}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>List again</Text>
            <TouchableOpacity 
              style={styles.btnMore}
              onPress={() => navigation.navigate('SearchListAgain')}

            >
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>
          {/* Sổ list data */}
          <FlatList
            scrollEnabled={false}
            data={songs}
            keyExtractor={() => getKey()}
            renderItem={({ item }) => (
              <ListListenMusic 
                items={item}
                onPress={() => handleSongPress(item)}
                onMenuItemPress={(action) => handleMenuItemPress(action, item)}
              />
            )}
          />
        </View>

        {/* New releases */}
        <View style={styles.newReleases}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>New releases</Text>
            <TouchableOpacity style={styles.btnMore} onPress={() => navigation.navigate('SearchNewReleases')}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ các new releases */}
          <FlatList
            data={albums}
            keyExtractor={() => getKey()}
            renderItem={({ item }) => <NewReleases music={item}/>}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Clips */}
        <View style={styles.clips}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Clips</Text>
          </View>
          {/* Sổ các clips */}
          <FlatList
            data={clips}
            renderItem={({ item }) => (
              <View>
              {/* chua sua */}
              <TouchableOpacity onPress={() => navigation.navigate('ClipsVideo', { clip: item })}>
                <Clips items={item}/>
              </TouchableOpacity>
              </View>
            )}
            keyExtractor={() => getKey()}
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
            style={{ width: '100%' }}
          />
        </View>

        {/* Trending songs */}
        <View style={styles.trending}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Trending songs</Text>
            <TouchableOpacity style={styles.btnMore}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>
          {/* Sổ các trending songs */}
          <FlatList
            data={songs}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSongPress(item)}>
                <ListSong items={item} />
              </TouchableOpacity>
            )}
            keyExtractor={() => getKey()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            scrollEnabled={false}
            style={{ marginTop: 20 }}
            data={songs}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSongPress(item)}>
                <ListSong items={item} />
              </TouchableOpacity>
            )}
            keyExtractor={() => getKey()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          {/* List group lại */}
          <FlatList
            data={albums}
            renderItem={({ item }) => <GroupTrendSong items={item}/>}
            keyExtractor={() => getKey()}
            horizontal={true}
            style={{ marginTop: 40 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Quick picks */}
        <View style={styles.quickPicks}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Quick picks</Text>
            <TouchableOpacity style={styles.btnMore}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ các quick picks */}
          <FlatList
            scrollEnabled={false}
            data={songs}
            renderItem={({ item }) => (
              <ListListenMusic 
                items={item}
                onPress={() => handleSongPress(item)}
                onMenuItemPress={(action) => handleMenuItemPress(action, item)}
              />
            )}
            keyExtractor={() => getKey()}
            horizontal={false}
          />
        </View>

        {/* Recommended albums */}
        <View style={styles.recommendedAlbums}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Recommended albums</Text>
            <TouchableOpacity style={styles.btnMore}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>
          <View>
            {/* Sổ các recommended albums */}
            <FlatList
              data={[1, 2, 3, 4, 5]}
              renderItem={({ item }) => <NewReleases />}
              keyExtractor={() => getKey()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View>
            {/* List group lại */}
            <FlatList
              scrollEnabled={false}
              data={albums}
              renderItem={({ item }) => <GroupTrendSong items={item} />}
              keyExtractor={() => getKey()}
              horizontal={true}
              style={{ marginTop: 30 }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* From your library */}
        <View style={styles.fromYourLibrary}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>From your library</Text>
            <TouchableOpacity style={styles.btnMore}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ các from your library */}
          <FlatList
            data={songs}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSongPress(item)}>
                <ListSong items={item} />
              </TouchableOpacity>
            )}
            keyExtractor={() => getKey()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <FlatList
            data={songs}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSongPress(item)}>
                <ListSong items={item} />
              </TouchableOpacity>
            )}
            keyExtractor={() => getKey()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Clips count */}
        <View style={styles.clipsCount}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Clips</Text>
            <TouchableOpacity style={styles.btnMore}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ các clips count */}
          <FlatList
            data={clips}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Clips', { clip: item })}>
                <Clips items={item} />
              </TouchableOpacity>
            )}
            keyExtractor={() => getKey()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Forgotten favorites */}
        <View style={styles.forgottenFavorites}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Forgotten favorites</Text>
            <TouchableOpacity style={styles.btnMore}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ các forgotten favorites */}
          <FlatList
            data={songs}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSongPress(item)}>
                <ListSong items={item} />
              </TouchableOpacity>
            )}
            keyExtractor={() => getKey()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Latest videos */}
        <View style={styles.latestVideos}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Latest videos</Text>
            <TouchableOpacity style={styles.btnMore}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ các latest videos */}
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Clips')}>
                <LastestVideos />
              </TouchableOpacity>
            )}
            keyExtractor={() => getKey()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Mood & genres */}
        <View style={styles.moodGenres}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>Mood & genres</Text>
            <TouchableOpacity style={styles.btnMore}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>

          {/* Sổ các mood & genres */}
          <View style={{ marginTop: 20 }}>
            <FlatList
              data={genres.slice(0, Math.ceil(genres.length/2))}
              renderItem={({ item }) => <MoodGenres genre={item} color={getRandomColor()} />}
              keyExtractor={() => getKey()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginBottom: 10 }}
            />
            <FlatList 
              data={genres.slice(Math.ceil(genres.length/2))}
              renderItem={({ item }) => <MoodGenres genre={item} color={getRandomColor()} />}
              keyExtractor={() => getKey()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

        </View>
        <View style={{height: 100}}></View>
      </ScrollView>
      <View style={styles.bottomNav}>
        <LiveMusicBottom items={currentSong} />
      </View>
    </View>
    </GestureHandlerRootView>
  );
};

export default Home;