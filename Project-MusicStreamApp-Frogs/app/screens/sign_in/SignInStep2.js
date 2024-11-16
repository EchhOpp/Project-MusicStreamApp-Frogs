import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/SignInStep2'

const SignInStep2 = (
    {navigation}
) => {
  return (
    <ScrollView style={styles.container} 
        showsVerticalScrollIndicator={false}
    >
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.steps}>
                    <View style={[styles.step,styles.colorNoActive]}></View>
                    <View style={[styles.step,styles.colorActive]}></View>
                </View>
                <Text style={[styles.fonttext24, styles.txtHeader]}>
                    Frogs help you find new music and create playlists that resonate with you.
                </Text>
            </View>
            {/* Content Section */}
            <View style={styles.content}>
                <View style={styles.itemContent}>
                    <Image source={require('../../../assets/images/Board.png')} />
                    <Text style={[styles.fonttext16, styles.colortext2,styles.contenttext]}>
                        Discover genres that resonate with you and your unique taste.
                    </Text>
                </View>
                <View style={styles.itemContent}>
                    <Image source={require('../../../assets/images/Board.png')} />
                    <Text style={[styles.fonttext16, styles.colortext2,styles.contenttext]}>
                        Find artists who inspire and captivate your soul.
                    </Text>
                </View>
                <View style={styles.itemContent}>
                    <Image source={require('../../../assets/images/Board.png')} />
                    <Text style={[styles.fonttext16, styles.colortext2,styles.contenttext]}>
                    Curate playlists that bring your moments to life.
                    </Text>
                </View>

            </View>
            <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('Main')}
            >
                <Text style={[styles.fonttext16, styles.colortext]}>Get started </Text>
            </TouchableOpacity>
        </ScrollView>
  )
}

export default SignInStep2
