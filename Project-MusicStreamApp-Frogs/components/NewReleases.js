import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const NewReleases = ({ music }) => {
  const navigation = useNavigation();

  if (!music) {
    return null;
  }

  const handlePress = () => {
    navigation.navigate('MusicDetail', { music });
  };

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.collection} onPress={handlePress}>
          <View style={styles.img}>
            <Image source={{ uri: music.image }} style={styles.imageStyle} />
          </View>
          <Text style={styles.nameMusic}>{music.key}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.nameAuthor}>{music.artist}</Text>
      </View>
    </View>
  );
};

export default NewReleases;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginRight: 12,
    marginTop: 12,
  },
  collection: {
    position: 'relative',
  },
  img: {
    borderRadius: 10,
    borderBottomWidth: 5,
  },
  imageStyle: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  nameMusic: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  nameAuthor: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14,
  },
});