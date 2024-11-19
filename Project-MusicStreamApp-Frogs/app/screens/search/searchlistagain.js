import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style/Search';
import ListListenMusic from '@/components/ListListenMusic';

const SearchListAgain = () => {
  const [songs] = useState([1, 2, 3, 4, 5]); // Placeholder data, replace with real data

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          style={[styles.searchInput, styles.fontSize16]}
          placeholder="Search for songs, artists, albums..."
          placeholderTextColor='#ffffff'
        />
        
        <View style={styles.viewCriteria}>
          <TouchableOpacity style={styles.itemCriteria}>
            <Text style={[styles.whiteColor, styles.fontSize14]}>Recent</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemCriteria}>
            <Text style={[styles.whiteColor, styles.fontSize14]}>Most Played</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemCriteria}>
            <Text style={[styles.whiteColor, styles.fontSize14]}>Favorites</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={[styles.whiteColor, {fontSize: 20, fontWeight: '600', marginLeft: 15, marginBottom: 15}]}>
            Listen Again
          </Text>
          <FlatList
            data={songs}
            renderItem={({ item }) => <ListListenMusic />}
            keyExtractor={item => item.toString()}
            style={styles.flastListStyle}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchListAgain;
