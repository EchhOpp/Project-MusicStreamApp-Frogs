import { Text, View,TouchableOpacity, FlatList} from 'react-native'
import React,{ useState, useEffect } from 'react'
import styles from './styles/SavedClips'
import { FontAwesome } from '@expo/vector-icons'
import SavedClipItem from '../../../components/SavedClips'
import LiveMusicBottom from '@/components/LiveMusicBottom'
import { useNavigation } from '@react-navigation/native'
import { getClips } from '@/services/getMusicApi'

const SavedClips = () => {
    const navigation = useNavigation();
    const [clips, setClips] = useState([]);
    const [loading, setLoading] = useState(true); // State để xử lý loading
    useEffect(() => {
        const loadClips = async () => {
            try {
                const clips = await getClips();
                setClips(clips);
            } catch (error) {
                console.error('Error loading clips:', error);
            } finally {
                setLoading(false);
            }
        }
        loadClips();
    }, []);

    const handlePress = (id) => {
        navigation.navigate('clipsItem',{id: id});
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.titles}>
            <Text style={[styles.Color, styles.textH1]}>Saved Clips</Text>
            <TouchableOpacity style={styles.btnFilter}>
                <FontAwesome name="sliders" size={24} color="white"/>
            </TouchableOpacity>
        </View>
        <FlatList
            style={styles.bodyContent}
            data={clips}
            // renderItem={({ item }) => <SavedClipItem onPress={() => handlePress(item.id)} item={item} />}
            renderItem={({ item }) => <SavedClipItem item={item} />}
            keyExtractor={item => item.toString()}
            numColumns={'2'}
        />
        <View style={styles.bottomNav}>
            <LiveMusicBottom />
        </View>
    </View>
  )
}
export default SavedClips
