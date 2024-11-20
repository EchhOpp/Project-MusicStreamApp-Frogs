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
        { id: '1', label: 'Trending' },
        { id: '2', label: 'New Releases' },
        { id: '3', label: 'Popular' },
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
            setSongs(songsData);
            setFilteredSongs(songsData);
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

        // Filter by selected criteria/genre if exists
        if (selectedCriteria) {
            filtered = filtered.filter(song => 
                song.genre?.toLowerCase() === selectedCriteria.toLowerCase()
            );
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
                // Toggle selection - if already selected, clear it
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