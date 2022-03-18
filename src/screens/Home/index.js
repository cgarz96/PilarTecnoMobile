import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable,
    ImageBackground,
    ToastAndroid 
} from 'react-native';
import { styles } from './styles'

export default Home = (props) => {

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.mainContent} source={require('../../assets/patterns/fondo.jpg')}>
                <View style={styles.rowContent}>
                    <View>
                        <Pressable style={styles.buttonContent} onPress={() => ToastAndroid.show('Ya te encuentras en Home', ToastAndroid.SHORT)}>
                            <Text>Home</Text>
                        </Pressable>
                        <Pressable style={styles.buttonContent} onPress={() => props.navigation.navigate('List')}>
                            <Text>List</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={styles.buttonContent} onPress={() => props.navigation.navigate('Maps')}>
                            <Text>Maps</Text>
                        </Pressable>
                        <Pressable style={styles.buttonContent} onPress={() => props.navigation.navigate('Profile')}>
                            <Text>Profile</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}