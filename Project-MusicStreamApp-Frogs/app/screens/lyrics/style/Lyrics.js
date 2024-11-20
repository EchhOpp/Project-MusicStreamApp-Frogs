import { StyleSheet } from "react-native";
import { Popins } from "@/constants/Popins";
import { Colors } from "@/constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradientOverlay: {
        flex: 1,
    },
    Container: {
        marginHorizontal: 20,
        marginTop: 40
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    btndown: {
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 50
    },
    list: {
        height: 500
    },
    lyricsContainer: {
        marginTop: 20,
        marginHorizontal: 10,
        height: 500
    },
    lyricsText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        opacity: 0.5,  // Làm mờ các lyrics thường
        marginVertical:5
    },
    lyricsTextMain: {
        color: 'white',
        fontSize: 22,  // Có thể tăng size chữ
        fontWeight: '700',  // Tăng độ đậm
        opacity: 1,    // Hiện rõ hoàn toàn
        marginVertical:5
    },

    scrollContainer: {
        flex: 1,
        position: 'relative',
    },
    linearGradientDown: {
        position: 'absolute',
        top: 0,
        left: -20,
        right: -20,
        height: 50,
        zIndex: 1,
        height: 500
    }

})

export default styles
