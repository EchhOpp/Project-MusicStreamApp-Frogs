import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import styles from './style/Home';
import ListListenMusic from '@/components/ListListenMusic';
import NewReleases from '@/components/NewReleases';
import Clips from '@/components/Clips';
import ListSong from '@/components/ListSong';
import GroupTrendSong from '@/components/GroupTrendSong';
import LastestVideos from '@/components/LastestVideos';
import MoodGenres from '@/components/MoodGenres';
import LiveMusicBottom from '@/components/LiveMusicBottom';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <GestureHandlerRootView>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.bodyContent}>
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
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <ListListenMusic />}
            keyExtractor={item => item.toString() + 'listenAgain'}
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
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <Clips />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
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
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <ListSong />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            removeClippedSubviews={true}
            style={{ marginTop: 20 }}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <ListSong />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          {/* List group lại */}
          <FlatList
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <GroupTrendSong />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            style={{ marginTop: 30 }}
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
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <ListListenMusic />}
            keyExtractor={item => item.toString()}
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

          {/* Sổ các recommended albums */}
          <FlatList
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <NewReleases />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          {/* List group lại */}
          <FlatList
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <GroupTrendSong />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            style={{ marginTop: 30 }}
            showsHorizontalScrollIndicator={false}
          />
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
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <ListSong />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />

          <FlatList
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <ListSong />}
            keyExtractor={item => item.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 20 }}
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
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <Clips />}
            keyExtractor={item => item.toString()}
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
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <ListSong />}
            keyExtractor={item => item.toString()}
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
            removeClippedSubviews={true}
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
          <FlatList
            removeClippedSubviews={true}
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({ item }) => <MoodGenres />}
            keyExtractor={item => item.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            horizontal={false}
          />
        </View>
        
      </ScrollView>
    </GestureHandlerRootView>
      {/* Tab live in bottom */}
      <View style={styles.bottomNav}>
        <LiveMusicBottom />
      </View>
    </View>
  );
};

export default Home;