import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, TextInput, Modal, Animated } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { getAlbums } from '@/services/getMusicApi'
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { useNavigation } from '@react-navigation/native'

const SearchNewReleases = () => {
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState('')
  const [filteredAlbums, setFilteredAlbums] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  
  const fadeAnim = useRef(new Animated.Value(0)).current
  const slideAnim = useRef(new Animated.Value(100)).current
  const navigation = useNavigation()

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albumsData = await getAlbums()
        setAlbums(albumsData)
        setFilteredAlbums(albumsData)
        setLoading(false)
        
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true
          })
        ]).start()

      } catch (error) {
        console.error('Error fetching albums:', error)
        setLoading(false)
      }
    }

    fetchAlbums()
  }, [])

  useEffect(() => {
    const filtered = albums.filter(album => {
      const albumName = album.albumName || ''
      const artist = album.artist || ''
      
      return albumName.toLowerCase().includes(searchText.toLowerCase()) ||
             artist.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilteredAlbums(filtered)
  }, [searchText, albums])

  const handleOptionsPress = (item) => {
    setSelectedAlbum(item)
    setModalVisible(true)
  }

  const handlePress = (item) => {
    navigation.navigate('MusicDetail', { music: item })
  }

  const renderItem = ({ item, index }) => {
    const itemFade = new Animated.Value(0)
    const itemSlide = new Animated.Value(50)

    Animated.parallel([
      Animated.timing(itemFade, {
        toValue: 1,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true
      }),
      Animated.timing(itemSlide, {
        toValue: 0,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true
      })
    ]).start()

    return (
      <Animated.View
        style={{
          opacity: itemFade,
          transform: [{ translateY: itemSlide }]
        }}
      >
        <TouchableOpacity style={styles.songItem} onPress={() => handlePress(item)}>
          <Image 
            source={{ uri: item.image }}
            style={styles.coverArt}
          />
          <View style={styles.songInfo}>
            <Text style={styles.songTitle} numberOfLines={1}>
              {item.key || ''}
            </Text>
            <Text style={styles.artistName} numberOfLines={1}>
              {item.artist || ''}
            </Text>
          </View>
          <TouchableOpacity onPress={() => handleOptionsPress(item)}>
            <MaterialIcons name="more-vert" size={24} color={Colors.primary.main} />
          </TouchableOpacity>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <FontAwesome5 name="compact-disc" size={40} color="#FFFFFF" style={{marginBottom: 10, transform: [{rotate: '360deg'}]}} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    )
  }

  return (
    <Animated.View style={[styles.container, {
      opacity: fadeAnim,
      transform: [{
        translateY: slideAnim
      }]
    }]}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#8E8E93" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search new releases..."
            placeholderTextColor="#8E8E93"
            value={searchText}
            onChangeText={setSearchText}
          />
          {searchText.length > 0 && (
            <TouchableOpacity onPress={() => setSearchText('')}>
              <Ionicons name="close-circle" size={20} color="#8E8E93" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <FlatList
        data={filteredAlbums}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
      <View style={{ height: 100 }}></View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity 
          style={styles.modalOverlay}
          activeOpacity={1} 
          onPress={() => setModalVisible(false)}
        >
          <Animated.View 
            style={[styles.modalContent, {
              transform: [{
                translateY: slideAnim
              }]
            }]}
          >
            <TouchableOpacity style={styles.modalOption}>
              <MaterialIcons name="playlist-add" size={24} color="#FFFFFF" style={styles.modalIcon} />
              <Text style={styles.modalOptionText}>Add to playlist</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Ionicons name="share-social" size={24} color="#FFFFFF" style={styles.modalIcon} />
              <Text style={styles.modalOptionText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <MaterialIcons name="album" size={24} color="#FFFFFF" style={styles.modalIcon} />
              <Text style={styles.modalOptionText}>View album</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Ionicons name="person" size={24} color="#FFFFFF" style={styles.modalIcon} />
              <Text style={styles.modalOptionText}>View artist</Text>
            </TouchableOpacity>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#404040',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#FFFFFF',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 16,
    color: '#FFFFFF',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#282828',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  coverArt: {
    width: 56,
    height: 56,
    borderRadius: 4,
  },
  songInfo: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  artistName: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.5)',   
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#282828',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  modalIcon: {
    marginRight: 15,
  },
  modalOptionText: {
    color: '#FFFFFF',
    fontSize: 16,
  }
})

export default SearchNewReleases
