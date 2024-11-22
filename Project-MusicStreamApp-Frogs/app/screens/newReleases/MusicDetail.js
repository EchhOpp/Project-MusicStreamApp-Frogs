import { View, Text, Image, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { getSongs } from '@/services/getMusicApi';

const MusicDetail = () => {
  const route = useRoute();
  const { music } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const [allSongs, setAllSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const songsData = await getSongs();
        setAllSongs(songsData);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  if (!music) {
    return null;
  }

  const filteredSongs = allSongs.filter(song =>
    music.songs.includes(song.id) && song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: music.image }} style={styles.imageStyle} />
        <View style={styles.info}>
          <Text style={styles.title}>{music.key}</Text>
          <Text style={styles.artist}>{music.artist}</Text>
        </View>
        <MaterialIcons name="favorite-border" size={28} color="white" style={styles.icon} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search songs..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={() => setSearchQuery('')}>
          <Ionicons name="search" size={24} color="white" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredSongs}
        renderItem={({ item }) => (
          <View style={styles.songItem}>
            <Image source={{ uri: item.image }} style={styles.songImage} />
            <View style={styles.songInfo}>
              <Text style={styles.songTitle}>{item.title}</Text>
              <Text style={styles.songArtist}>{item.author}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MusicDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    marginBottom: 10,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  info: {
    marginLeft: 20,
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  artist: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 18,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    color: '#fff',
  },
  searchIcon: {
    marginLeft: 10,
  },
  listContent: {
    paddingBottom: 10,
  },
  icon: {
    marginLeft: 10,
  },
  songItem: {
    padding: 5,
    backgroundColor: '#1f1f1f',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  songArtist: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 14,
  },
});
