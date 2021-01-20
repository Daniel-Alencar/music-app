import React from 'react';
import {View, Dimensions, StyleSheet, ScrollView } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import MusicContainer from '../components/MusicContainer';

export default function DownloadsScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>

          <MusicContainer 
            musicName="Gravity" 
            imageSource={require('../images/Albuns/Continuum.jpg')}
            centerTextMusic={true} 
          />
          <MusicContainer 
            musicName="In Repair" 
            imageSource={require('../images/Albuns/Continuum.jpg')}
            centerTextMusic={true}  
          />

        </ScrollView>
      </View>

      <RectButton style={styles.plusButton} onPress={() => {}} >
        <Feather name="plus" size={30} color="#000"/>
      </RectButton>

    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    width: windowWidth,
  },
  contentContainerView: {
    borderColor: '#00f',
    borderWidth: 0,
  },
  contentContainer: {
    borderColor: '#0f0',
    borderWidth: 0,
  },

  plusButton: {
    backgroundColor: 'white',
    height: 60,
    width: 60,

    borderRadius: 50,

    position: 'absolute',
    bottom: 20,
    right: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});