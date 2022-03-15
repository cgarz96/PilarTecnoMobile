import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground
} from 'react-native';
import { styles } from './styles'

export default Home = () => {

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.mainContent} source={require('../../assets/patterns/fondo.jpg')}>
                <View style={styles.rowContent}>
                    <View>
                        <Pressable style={styles.buttonContent} onPress={() => console.log('home')}>
                            <Text>Home 1</Text>
                        </Pressable>
                        <Pressable style={styles.buttonContent}>
                            <Text>Home 2</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={styles.buttonContent}>
                            <Text>Home 3</Text>
                        </Pressable>
                        <Pressable style={styles.buttonContent}>
                            <Text>Home 4</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}