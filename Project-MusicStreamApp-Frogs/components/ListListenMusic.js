import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Animated } from 'react-native'
import React, { useState, useRef } from 'react'
import Feather from '@expo/vector-icons/Feather';
import { Colors } from '@/constants/Colors'
import { Popins } from '@/constants/Popins'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const ListListenMusic = ({items, onPress}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(0)).current;

    if (!items) 
        return null

    const showModal = () => {
        setModalVisible(true);
        Animated.timing(slideAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start();
    };

    const hideModal = () => {
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start(() => setModalVisible(false));
    };

    const handlePress = () => {
        if (typeof onPress === 'function') {
            onPress(items);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.music} onPress={handlePress}>
                <Image source={{ uri: items.image }} style={{width: 52, height: 52, borderRadius: 4}} />
                <View style={styles.textName}>
                    <Text style={styles.nameMucsic}>{items.title}</Text>
                    <Text style={styles.authour}>{items.author}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={showModal}>
                <Feather name="more-vertical" size={24} color="white" />
            </TouchableOpacity>

            <Modal
                animationType="none"
                transparent={true}
                visible={modalVisible}
                onRequestClose={hideModal}
            >
                <TouchableOpacity 
                    style={styles.modalOverlay}
                    activeOpacity={1} 
                    onPress={hideModal}
                >
                    <Animated.View 
                        style={[
                            styles.modalContent,
                            {
                                transform: [{
                                    translateY: slideAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [300, 0]
                                    })
                                }]
                            }
                        ]}
                    >
                        <TouchableOpacity style={styles.menuItem}>
                            <Ionicons name="heart-outline" size={20} color="white" />
                            <Text style={styles.menuText}>Add to favorites</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <MaterialIcons name="playlist-add" size={20} color="white" />
                            <Text style={styles.menuText}>Add to playlist</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <MaterialIcons name="queue-music" size={20} color="white" />
                            <Text style={styles.menuText}>Add to queue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <Ionicons name="share-outline" size={20} color="white" />
                            <Text style={styles.menuText}>Share</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default ListListenMusic

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    music: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameMucsic: {
        color: Colors.neutral.white,
        fontSize: Popins.Heading5.size,
        fontWeight: Popins.FontFamilies.Bold,
    },
    textName: {
        marginLeft: 12,
    },
    authour: {
        color: Colors.neutral.rgba3,
        fontSize: 12,
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
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    },
    menuText: {
        color: Colors.neutral.white,
        fontSize: 16,
        marginLeft: 15,
    }
})