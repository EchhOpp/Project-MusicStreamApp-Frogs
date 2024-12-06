import { StyleSheet, Text, View, TouchableOpacity, Image, Modal, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import Feather from '@expo/vector-icons/Feather';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { Popins } from '@/constants/Popins';

const ListListenMusic = ({ items, onPress, onMenuItemPress }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(300)).current; // Animation initial state

    if (!items) return null;

    // Hiển thị modal với animation
    const showModal = () => {
        setModalVisible(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    // Ẩn modal với animation
    const hideModal = () => {
        Animated.timing(slideAnim, {
            toValue: 300,
            duration: 300,
            useNativeDriver: true,
        }).start(() => setModalVisible(false));
    };

    // Gọi hành động khi bấm vào bài hát
    const handlePress = () => {
        if (typeof onPress === 'function') {
            onPress(items);
        }
    };

    // Xử lý khi chọn một menu item
    const handleMenuPress = (action) => {
        if (typeof onMenuItemPress === 'function') {
            onMenuItemPress(action, items); // Truyền action và bài hát
        }
        hideModal();
    };

    return (
        <View style={styles.container}>
            {/* Thông tin bài hát */}
            <TouchableOpacity style={styles.music} onPress={handlePress}>
                <Image
                    source={{ uri: items.image }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{items.title}</Text>
                    <Text style={styles.author}>{items.author}</Text>
                </View>
            </TouchableOpacity>

            {/* Nút mở menu */}
            <TouchableOpacity onPress={showModal}>
                <Feather name="more-vertical" size={24} color={Colors.neutral.white} />
            </TouchableOpacity>

            {/* Modal với các tùy chọn */}
            <Modal
                transparent
                visible={modalVisible}
                onRequestClose={hideModal}
                animationType="none"
            >
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={hideModal}
                >
                    <Animated.View style={[styles.modalContent, { transform: [{ translateY: slideAnim }] }]}>
                        {/* Các item trong menu */}
                        {menuItems.map((menuItem, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.menuItem}
                                onPress={() => handleMenuPress(menuItem.action)}
                            >
                                {menuItem.icon}
                                <Text style={styles.menuText}>{menuItem.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </Animated.View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

export default ListListenMusic;

// Danh sách menu items
const menuItems = [
    {
        action: 'Add to favorites',
        label: 'Add to favorites',
        icon: <Ionicons name="heart-outline" size={20} color="white" />,
    },
    {
        action: 'Add to playlist',
        label: 'Add to playlist',
        icon: <MaterialIcons name="playlist-add" size={20} color="white" />,
    },
    {
        action: 'Add to queue',
        label: 'Add to queue',
        icon: <MaterialIcons name="queue-music" size={20} color="white" />,
    },
    {
        action: 'Share',
        label: 'Share',
        icon: <Ionicons name="share-outline" size={20} color="white" />,
    },
];

// StyleSheet
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 12,
    },
    music: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 52,
        height: 52,
        borderRadius: 4,
    },
    textContainer: {
        marginLeft: 12,
    },
    title: {
        color: Colors.neutral.white,
        fontSize: Popins.Heading5.size,
        fontWeight: Popins.FontFamilies.Bold,
    },
    author: {
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
    },
});
