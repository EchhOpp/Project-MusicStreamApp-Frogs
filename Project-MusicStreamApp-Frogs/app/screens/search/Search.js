import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../search/style/Search';
import ListListenMusic from '@/components/ListListenMusic';

const Search = () => {
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
                        <Text style={[styles.whiteColor, styles.fontSize14]}>Top 100</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemCriteria}>
                        <Text style={[styles.whiteColor, styles.fontSize14]}>Albums</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemCriteria}>
                        <Text style={[styles.whiteColor, styles.fontSize14]}>Singles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemCriteria}>
                        <Text style={[styles.whiteColor, styles.fontSize14]}>Related</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({ item }) => <ListListenMusic />}
                    keyExtractor={item => item.toString()}
                    style={styles.flastListStyle}
                />
            </ScrollView>
        </View>

    );
};

// const styles = StyleSheet.create({});

export default Search;