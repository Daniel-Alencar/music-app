import React from 'react';

import { ScrollView, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NavigationBar from '../components/NavigationBar';
import PlaylistsContainer from '../components/PlaylistsContainer';
import ArtistsContainer from '../components/ArtistsContainer';

import { Feather } from '@expo/vector-icons';


export default function Home() {

  const navigation = useNavigation();
  
  function handleNavigateToSettingsScreen() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>

          <TouchableOpacity onPress={handleNavigateToSettingsScreen} style={styles.settingsContainer}>
            <Feather name="settings" size={25} color="white"></Feather>
          </TouchableOpacity>

          <PlaylistsContainer/>
          <ArtistsContainer/>
          <PlaylistsContainer/>
          <PlaylistsContainer/>

        </ScrollView>
      </View>

      <NavigationBar/>

    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    borderWidth: 0,

    backgroundColor: '#000',
    height: windowHeight,
    width: windowWidth,
  },
  contentContainerView: {
    width: windowWidth - 2,
    height: windowHeight - 50,
  },
  contentContainer: {
    borderColor: '#ff0',
    borderWidth: 0,

    padding: '0%',
    paddingTop: '1%',
    paddingBottom: '1%',
  },
  settingsContainer: {
    position: 'absolute',
    right: 15,
    top: 15,

    zIndex: 1,

    borderColor: '#f0f',
    borderWidth: 0,
  },
});
