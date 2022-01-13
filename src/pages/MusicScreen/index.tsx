import React from 'react';
import { 
  FlatList, 
  Image, 
  View 
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import songs from '../../assets/playlists/songsOfPlaylist';

import {
  TopBar, 
  ScreenArea, 
  CoverArea, 
  PlayerArea, 
  Controls,
  styles
} from './style';

import Background from './Background';
import ShuffleButton from './ShuffleButton';
import RepeatButton from './RepeatButton';
import Slider from './Slider';

import ChevronIcon from './icons/ChevronIcon/ChevronIcon';
import MoreVertIcon from './icons/MoreVerIcon/MoreVertIcon';
import PlayIcon from './icons/PlayIcon/PlayIcon';

// =====================================================================================
// =====================================================================================

function MusicScreen() {
  // ==================================================================

  const navigation = useNavigation();
  function handleToPreviousScreen() {
    navigation.goBack();
  }

  // ==================================================================
  // =====================================================================================

  function renderImageFromFlatList({item}: any) {
    return (
      <View style={styles.imageContainer}>
        <Image 
          style={styles.itemFlatListContainer}
          source={{ uri: item.imageSource }}
        />
      </View>
    );
  }
  
  // ==================================================================
  // ==================================================================

  return(
    <Background 
      children={
        <>
          <TopBar>

            <TopBar.Left>
              <TopBar.Left.ToBackScreen onPress={handleToPreviousScreen}>
                <ChevronIcon />
              </TopBar.Left.ToBackScreen>
            </TopBar.Left>

            <TopBar.Middle>
              <TopBar.Title>
                {
                  "TOCANDO MÚSICA"
                }
              </TopBar.Title>
              <TopBar.SubTitle>
                {"John Mayer"}
              </TopBar.SubTitle>
            </TopBar.Middle>

            <TopBar.Right>
              <TopBar.Right.MoreOptions>
                <MoreVertIcon />
              </TopBar.Right.MoreOptions>
            </TopBar.Right>

          </TopBar>

          <ScreenArea>

            <CoverArea>
              <FlatList 
                pagingEnabled
                overScrollMode="never" 
                showsHorizontalScrollIndicator={false}
                horizontal

                style={styles.flatListContainer}

                data={songs}
                renderItem={({item}) => renderImageFromFlatList({item})}
                keyExtractor={(item) => item.key}
                onScroll={() => {}}
              />
              
            </CoverArea>

            <PlayerArea>
              
              <PlayerArea.Content>

                <PlayerArea.Content.Info>
                  <PlayerArea.Content.Info.Title>
                    {"Gravity"}
                  </PlayerArea.Content.Info.Title>
                  <PlayerArea.Content.Info.Author>
                    {"John Mayer"}
                  </PlayerArea.Content.Info.Author>
                </PlayerArea.Content.Info>

                <PlayerArea.Content.FavoriteButton isFavorite={true}/>

              </PlayerArea.Content>

            </PlayerArea>

            <Controls>

              <Slider
                musicDuration={160}
                currentMusicTime={130}

                value={100}

                onSlidingComplete={() => {}}
                onSlidingStart={() => {}}

                onValueChange={() => {}}
              />

              <ShuffleButton isClicked={false}/>
              
              <Controls.SkipBack onPress={() => {}}>
                <Feather name="skip-back" color="#fff" size={27}/>
              </Controls.SkipBack>

              <Controls.Play onPress={() => {}}>
                  {
                    <PlayIcon />
                  }
              </Controls.Play>
              
              <Controls.SkipForward onPress={() => {}}>
                <Feather name="skip-forward" color="#fff" size={27}/>
              </Controls.SkipForward>
              
              <RepeatButton isClicked={false}/>

            </Controls>
          </ScreenArea>

        </>
      }
    />
  );
}

export default MusicScreen;