import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Popins } from "@/constants/Popins";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradientOverlay: {
        flex: 1,
    },
    Container: {
        marginHorizontal:20,
        marginTop:40
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20
    },
    btndown:{
        padding:10,
        backgroundColor:'rgba(255,255,255,0.2)',
        borderRadius:50
    },
    list:{
        height:500
    }
})

export default styles
