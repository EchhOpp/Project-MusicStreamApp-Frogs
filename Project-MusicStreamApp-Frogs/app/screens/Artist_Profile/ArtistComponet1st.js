import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const ArtistComponet1st = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('@/assets/images/lastbanner.png')}
                imageStyle={{ borderRadius: 10 }}
                style={{height: 500, borderRadius: 10}}
            >
                <LinearGradient
                    style={styles.gradient}
                    colors={['rgba(255, 255, 255, 0.01)', 'rgba(0, 0, 0,1.5)','rgba(255, 255, 255,0.7)']}>
                <View style={styles.content} >
                    <View style={styles.contentH} >
                        <View>
                            <Text style={[styles.color2, styles.texth2]}>Verified</Text>
                            <Text style={[styles.color, styles.texth1]}>The Weeknd</Text>
                            <Text style={[styles.color2, styles.texth2]}>123,345,749  monthly listeners</Text>
                        </View>
                        <View style={styles.circle}>
                            <Text style={[styles.color, styles.texth1]}>1st</Text>
                        </View>
                    </View>
                    <Text style={[styles.color2, styles.texth2]}>Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer and songwriter. He is known for his unconventional music production, artistic reinventions, and signature use of the falsetto register. </Text>
                </View>
                </LinearGradient>
            </ImageBackground>
        </View>

    )
}

export default ArtistComponet1st

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        position: 'relative',
        justifyContent: 'flex-end',
        marginBottom: 80,
    },
    content: {
        padding: 20,
    },
    color: {
        color: 'white',
    },
    texth1:
    {
        fontSize: 20,
    },
    color2: {
        color: 'rgba(255, 255, 255, 0.64)',
    },
    texth2: {
        fontSize: 15,
    },
    contentH: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        top:250,
        height: 250,
        // width: ,
        borderRadius: 10,
        marginBottom: 5000,
    }

})