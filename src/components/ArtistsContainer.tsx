import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import ArtistContainer from './ArtistContainer';

interface propsArtistsContainer {
  title: string,
}

const defaultMargin = 15;

export default function ArtistsContainer(props: propsArtistsContainer) {
  return (
    <View style={styles.artistsContainer}>

      <Text style={styles.titles}>{props.title}</Text>

      <View style={styles.artistsView}>
        <ScrollView 
          overScrollMode="never" 
          horizontal 
          style={styles.artists}
          contentContainerStyle={{
            paddingRight: defaultMargin,
            paddingLeft: defaultMargin,

            flexGrow: 1,
            justifyContent: 'space-between',
            
            flexDirection: 'row',
            alignItems: 'center',

            width: 'auto',

            borderColor: '#0f0',
            borderWidth: 1,
          }}
        >
          
          <ArtistContainer 
            artistName="Daniel" 
          />
          <ArtistContainer 
            artistName="Daniel" 
          />
          <ArtistContainer 
            artistName="Daniel" 
          />
          <ArtistContainer 
            artistName="Daniel" 
          />
          <ArtistContainer 
            artistName="Daniel Alencar Penha Carvalho" 
          />

        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  artistsContainer: {
    marginTop: 20,

    borderColor: '#f0f',
    borderWidth: 1,

    height: 240,
    width: '100%',

    flexDirection: 'column',
    justifyContent: 'center',
  },
  titles: {
    color: '#fff',
    fontSize: 22,
    fontWeight: "bold",

    borderColor: '#f00',
    borderWidth: 0,

    marginLeft: defaultMargin,
  },
  artistsView: {
    height: 190,
    width: '100%',

    borderColor: '#0f0',
    borderWidth: 1,
  },
  artists: {
    borderColor: '#f00',
    borderWidth: 1,
  },
});
