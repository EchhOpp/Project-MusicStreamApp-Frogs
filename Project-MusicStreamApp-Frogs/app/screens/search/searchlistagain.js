import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style/Search';
import ListListenMusic from '@/components/ListListenMusic';
import { getSongs } from '@/services/getMusicApi';
import { Colors } from '@/constants/Colors';

const SearchListAgain = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [songs, setSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCriteria, setSelectedCriteria] = useState('');

    // Modified criteria to focus on recently played/history
    const criteriaData = [
        { id: '1', label: 'Recently Played' },
        { id: '2', label: 'Most Played' },
        { id: '3', label: 'Last Week' },
        { id: '4', label: 'Last Month' },
        { id: '5', label: 'Favorites' }
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
            // Sort songs by last played date (assuming there's a lastPlayed field)
            const sortedSongs = songsData.sort((a, b) => {
                return new Date(b.lastPlayed) - new Date(a.lastPlayed);
            });
            setSongs(sortedSongs);
            setFilteredSongs(sortedSongs);
        } catch (error) {
            console.error('Error loading songs:', error);
        } finally {
            setLoading(false);
        }
    };

    const filterSongs = () => {
        let filtered = [...songs];

        if (searchQuery.trim()) {
            filtered = filtered.filter(song => 
                song.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                song.artist?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Modified filtering based on history criteria
        if (selectedCriteria) {
            switch(selectedCriteria) {
                case 'Recently Played':
                    filtered = filtered.slice(0, 10); // Show last 10 played
                    break;
                case 'Most Played':
                    filtered = filtered.sort((a, b) => (b.playCount || 0) - (a.playCount || 0));
                    break;
                case 'Last Week':
                    const lastWeek = new Date();
                    lastWeek.setDate(lastWeek.getDate() - 7);
                    filtered = filtered.filter(song => new Date(song.lastPlayed) > lastWeek);
                    break;
                case 'Last Month':
                    const lastMonth = new Date();
                    lastMonth.setMonth(lastMonth.getMonth() - 1);
                    filtered = filtered.filter(song => new Date(song.lastPlayed) > lastMonth);
                    break;
                case 'Favorites':
                    filtered = filtered.filter(song => song.isFavorite);
                    break;
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
                    backgroundColor: Colors.primary.main,
                    borderColor: Colors.primary.main,
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
                        placeholder="Search in your history..."
                        placeholderTextColor="rgba(255,255,255,0.6)"
                        value={searchQuery}
                        onChangeText={handleSearch}
                        autoFocus={false}
                    />
                </View>
                
                {renderCriteria()}

                {filteredSongs.length > 0 ? (
                    <FlatList
                        scrollEnabled={false}
                        data={filteredSongs}
                        renderItem={({ item }) => (
                            <ListListenMusic 
                                items={item}
                                showLastPlayed={true} // Add timestamp for when song was last played
                            />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        style={styles.flastListStyle}
                        showsVerticalScrollIndicator={false}
                    />
                ) : (
                    <View style={[styles.centerContent, {marginTop: 40}]}>
                        <Text style={[styles.whiteColor, styles.fontSize16]}>No history found</Text>
                    </View>
                )}
                <View style={{height: 108}} />
            </ScrollView>
        </View>
    );
};

export default SearchListAgain;
