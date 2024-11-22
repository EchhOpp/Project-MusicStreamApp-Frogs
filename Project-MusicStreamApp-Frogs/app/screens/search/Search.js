import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../search/style/Search';
import ListListenMusic from '@/components/ListListenMusic';
import { getSongs } from '@/services/getMusicApi';
import { Colors } from '@/constants/Colors';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [songs, setSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCriteria, setSelectedCriteria] = useState('');

    const criteriaData = [
        { id: '1', label: 'Trending', showMusic: true },
        { id: '2', label: 'New Releases', showMusic: true },
        { id: '3', label: 'Popular', showMusic: true },
        { id: '4', label: 'Recommended' },
        { id: '5', label: 'Hip Hop' },
        { id: '6', label: 'Rock' },
        { id: '7', label: 'Pop' },
        { id: '8', label: 'R&B' },
        { id: '9', label: 'Jazz' },
        { id: '10', label: 'Classical' },
        { id: '11', label: 'Electronic' },
        { id: '12', label: 'Country' },
        { id: '13', label: 'Latin' },
        { id: '14', label: 'K-Pop' },
        { id: '15', label: 'Indie' }
    ];

    useEffect(() => {
        loadSongs();
    }, []);

    useEffect(() => {
        filterSongs();
    }, [searchQuery, selectedCriteria, songs]);

    const loadSongs = async () => {
        try {
            setLoading(true);
            const songsData = await getSongs();
            // Giả lập phân loại nhạc ngay khi lấy về
            const categorizedSongs = songsData.map(song => ({
                ...song,
                isTrending: Math.random() > 0.7, // 30% chance to be trending
                isNewRelease: new Date(song.releaseDate || Date.now()).getTime() > Date.now() - (30 * 24 * 60 * 60 * 1000), // Released within 30 days
                isPopular: (song.playCount || 0) > 1000 // Consider popular if > 1000 plays
            }));
            setSongs(categorizedSongs);
            setFilteredSongs(categorizedSongs);
        } catch (error) {
            console.error('Error loading songs:', error);
        } finally {
            setLoading(false);
        }
    };

    const filterSongs = () => {
        let filtered = [...songs];

        // Filter by search query if exists
        if (searchQuery.trim()) {
            filtered = filtered.filter(song => 
                song.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                song.artist?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter based on selected criteria
        if (selectedCriteria) {
            const selectedItem = criteriaData.find(item => item.label === selectedCriteria);
            if (selectedItem?.showMusic) {
                // Handle special categories
                switch(selectedCriteria) {
                    case 'Trending':
                        filtered = filtered.filter(song => song.isTrending);
                        break;
                    case 'New Releases':
                        filtered = filtered.filter(song => song.isNewRelease);
                        break;
                    case 'Popular':
                        filtered = filtered.filter(song => song.isPopular);
                        break;
                }
            } else {
                // Filter by genre for other categories
                filtered = filtered.filter(song => 
                    song.genre?.toLowerCase() === selectedCriteria.toLowerCase()
                );
            }
        }

        setFilteredSongs(filtered);
    };

    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    const renderCriteriaItem = ({ item }) => (
        <TouchableOpacity 
            style={[
                styles.itemCriteria, 
                selectedCriteria === item.label && {
                    borderColor: Colors.primary.main,
                    borderWidth: 1
                }
            ]}
            onPress={() => {
                setSelectedCriteria(selectedCriteria === item.label ? '' : item.label);
            }}
        >
            <Text style={[styles.whiteColor, styles.fontSize14]}>{item.label}</Text>
        </TouchableOpacity>
    );

    const renderCriteria = () => (
        <View style={styles.viewCriteria}>
            <FlatList
                data={criteriaData}
                renderItem={renderCriteriaItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );

    if (loading) {
        return (
            <View style={[styles.container, styles.centerContent, {marginTop: 58, backgroundColor: Colors.neutral.gray}]}>
                <ActivityIndicator size="large" color="#1DB954" />
            </View>
        );
    }

    return (
        <View style={[styles.container]}>
            <ScrollView>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={[styles.searchInput, styles.fontSize16]} 
                        placeholder="What do you want to listen to?"
                        placeholderTextColor="rgba(255,255,255,0.6)"
                        value={searchQuery}
                        onChangeText={handleSearch}
                        autoFocus={true}
                    />
                </View>
                
                {renderCriteria()}

                {filteredSongs.length > 0 ? (
                    <FlatList
                        scrollEnabled={false}
                        data={filteredSongs}
                        renderItem={({ item }) => (
                            <ListListenMusic items={item} />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        style={styles.flastListStyle}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <View style={[styles.centerContent, {marginTop: 40}]}>
                        <Text style={[styles.whiteColor, styles.fontSize16]}>No music found</Text>
                    </View>
                )}
                <View style={{height: 108}} />
            </ScrollView>
        </View>
    );
};

export default Search;