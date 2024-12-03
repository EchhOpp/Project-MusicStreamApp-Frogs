import { Text, View, TouchableOpacity, FlatList, Modal, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './styles/SavedClips'
import { FontAwesome } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import SavedClipItem from '../../../components/SavedClips'
import LiveMusicBottom from '@/components/LiveMusicBottom'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { getClips } from '@/services/getMusicApi'

const SavedClips = () => {
    const navigation = useNavigation();
    const [clips, setClips] = useState([]);
    const [loading, setLoading] = useState(true); // State để xử lý loading

    // state modal
    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [filteredClips, setFilteredClips] = useState(clips);

    // const filteredClips = clips.filter(clip => clip.title.toLowerCase().includes(searchText.toLowerCase()));
    const handleSearch = () => {
        if (searchText.trim() === '') {
            setFilteredClips(clips);
        } else {
            const filteredClips = clips.filter(clip => clip.title.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredClips(filteredClips);
            setSearchText('');
        }
        setModalVisible(false);
    }

    useEffect(() => {
        const loadClips = async () => {
            try {
                const clips = await getClips();
                setClips(clips);
                setFilteredClips(clips);
            } catch (error) {
                console.error('Error loading clips:', error);
            } finally {
                setLoading(false);
            }
        }
        loadClips();
    }, []);

    const handlePress = (id) => {
        navigation.navigate('clipsItem', { id: id });
    }

    useFocusEffect(
        React.useCallback(() => {
            const loadClips = async () => {
                try {
                    const clips = await getClips();
                    setClips(clips);
                    setFilteredClips(clips);
                } catch (error) {
                    console.error('Error loading clips:', error);
                } finally {
                    setLoading(false);
                }
            }
            loadClips();
        }
    , []))
    return (
        <View style={styles.container}>
            <View style={styles.titles}>
                <Text style={[styles.Color, styles.textH1]}>Saved Clips</Text>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={styles.btnFilter}>
                    <FontAwesome name="sliders" size={24} color="white" />
                </TouchableOpacity>
            </View>
            {/* Filter Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={modalStyles.centeredView}>
                    <View style={modalStyles.modalView}>
                        {/* Header */}
                        <View style={modalStyles.modalHeader}>
                            <Text style={modalStyles.modalTitle}>Search</Text>
                            <TouchableOpacity

                                onPress={() => {
                                    setModalVisible(false)
                                    setSearchText('')
                                }}
                                style={modalStyles.closeButton}
                            >
                                <AntDesign name="close" size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                        {/* Search Input */}
                        <View style={modalStyles.searchContainer}>
                            {/* <FontAwesome name="search" size={20} color="gray" />
                             */}
                             <AntDesign name="search1" size={24} color="gray"/>
                            <TextInput
                                style={modalStyles.searchInput}
                                placeholder="Search by name..."
                                placeholderTextColor="gray"
                                value={searchText}
                                onChangeText={setSearchText}
                                autoFocus={true}
                            />
                        </View>

                        {/* Sort Options */}
                        <View style={modalStyles.sortContainer}>
                            {/* <Text style={modalStyles.sortTitle}>Sort by:</Text> */}
                            <TouchableOpacity
                                style={[
                                    modalStyles.sortButton,
                                    modalStyles.sortButtonActive
                                ]}
                                onPress={() => {
                                    handleSearch()
                                }}
                            >
                                <Text style={modalStyles.sortButtonText}>Search</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {filteredClips.length === 0 && (
                <View style={styles.noData}>
                    <Text style={styles.noDataText}>No clips found</Text>
                </View>
            )}

            {/* render list clips */}
            <FlatList
                style={styles.bodyContent}
                // data={clips}
                data={filteredClips}
                // renderItem={({ item }) => <SavedClipItem onPress={() => handlePress(item.id)} item={item} />}
                renderItem={({ item }) => <SavedClipItem item={item} />}
                keyExtractor={item => item.toString()}
                numColumns={2}
            />
            <View style={styles.bottomNav}>
                <LiveMusicBottom />
            </View>
        </View>
    )
}
export default SavedClips


const modalStyles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        width: '80%',
        backgroundColor: '#2A2A2A',
        borderRadius: 8,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    modalTitle: {
        color: 'white',
        fontSize: 20,
        // fontWeight: 'bold'
    },
    closeButton: {
        padding: 5
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#3A3A3A',
        borderRadius: 10,
        padding: 5,
        marginBottom: 10
    },
    searchInput: {
        flex: 1,
        color: 'white',
        marginLeft: 10,
        fontSize: 16,
        padding:5
    },
    sortContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sortTitle: {
        color: 'white',
        fontSize: 16
    },
    sortButton: {
        backgroundColor: '#3A3A3A',
        padding: 8,
        borderRadius: 10,
        minWidth: 80,
        alignItems: 'center'
    },
    sortButtonActive: {
        backgroundColor: '#de322f'
    },
    sortButtonText: {
        color: 'white',
        fontSize: 14
    }
});
