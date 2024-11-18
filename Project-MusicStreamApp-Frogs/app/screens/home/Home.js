import { View, Text, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import React, {useState, useEffect}from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from './style/Home';
import ListListenMusic from '@/components/ListListenMusic';
import NewReleases from '@/components/NewReleases';
import Clips from '@/components/Clips';
import ListSong from '@/components/ListSong';
import GroupTrendSong from '@/components/GroupTrendSong';
import LastestVideos from '@/components/LastestVideos';
import MoodGenres from '@/components/MoodGenres';
import * as SplashScreen from 'expo-splash-screen';
import useLoadFonts from '@/hooks/useLoadFonts';
import { getSongs, getAlbums, getClips} from '@/services/getMusicApi';
import { getGenre } from '@/services/ChooseMusic';
import { getRandomColor } from '@/utils/getRandomColor';

SplashScreen.preventAutoHideAsync();

const Home = ({ navigation, route = {} }) => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [clips, setClips] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { loaded, error } = useLoadFonts();
  const { setCurrentSong = () => {} } = route.params || {};

  useEffect(() => {
    const loadData = async () => {
      try {
        const [songsArray, albumsArray, clipsArray, genreList] = await Promise.all([
          getSongs(),
          getAlbums(),
          getClips(),
          getGenre()
        ]);

        setSongs(songsArray);
        setAlbums(albumsArray);
        setClips(clipsArray);
        setGenres(genreList);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
        SplashScreen.hideAsync();
      }
    };

    loadData();
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
    setCurrentSong(song);
  };

  alert(JSON.stringify(route.params));

  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <ScrollView style={styles.bodyContent}>
        {/* List again */}
        <View style={styles.listenAgain}>
          <View style={styles.listenTitle}>
            <Text style={[styles.Color, styles.textH1]}>List again</Text>
            <TouchableOpacity style={styles.btnMore}>
              <Text style={[styles.Color, styles.textH2]}>More</Text>
            </TouchableOpacity>
          </View>
          {/* Sổ list data */}
          <FlatList
            scrollEnabled={false}
            data={songs}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <ListListenMusic 
                items={item}
                onPress={() => handleSongPress(item)}
              />
            )}
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
            data={albums}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <NewReleases music={item}/>}
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
            data={clips}
            renderItem={({ item }) => <Clips items={item}/>}
            keyExtractor={item => item.id}
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
            keyExtractor={item => item.id}
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
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          {/* List group lại */}
          <FlatList
            data={albums}
            renderItem={({ item }) => <GroupTrendSong items={item}/>}
            keyExtractor={item => item.toString()}
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
              />
            )}
            keyExtractor={item => item.id}
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
              keyExtractor={item => item.toString()}
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
              keyExtractor={item => item.id}
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
            keyExtractor={item => item.id}
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
            keyExtractor={item => item.id}
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
            renderItem={({ item }) => <Clips items={item} />}
            keyExtractor={item => item.id}
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
            keyExtractor={item => item.id}
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
            renderItem={({ item }) => <LastestVideos />}
            keyExtractor={item => item.toString()}
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
              keyExtractor={item => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ marginBottom: 10 }}
            />
            <FlatList 
              data={genres.slice(Math.ceil(genres.length/2))}
              renderItem={({ item }) => <MoodGenres genre={item} color={getRandomColor()} />}
              keyExtractor={item => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
    </GestureHandlerRootView>
  );
};

export default Home;