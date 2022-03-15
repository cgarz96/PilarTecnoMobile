import React, { Component, useCallback } from 'react';
import { 
    SafeAreaView,
    View, 
    Text,
    Pressable
} from 'react-native';
import { styles } from './styles'

export default Home = () => {

    return(
        <SafeAreaView style={styles.container}>
            <View>
               <View>
                   <Pressable onPress={() => console.log('home')}>
                       <Text>Home 1</Text>
                   </Pressable>
                   <Pressable>
                       <Text>Home 2</Text>
                   </Pressable>
               </View>
               <View>
                   <Pressable>
                       <Text>Home 3</Text>
                   </Pressable>
                   <Pressable>
                       <Text>Home 4</Text>
                   </Pressable>
               </View>
            </View>
        </SafeAreaView>
    )
}