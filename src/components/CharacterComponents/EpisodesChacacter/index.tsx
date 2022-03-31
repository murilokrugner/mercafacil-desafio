import React from 'react';
import { View } from 'react-native';

import {
    TitleEpisodes,
    ContainerEpisodes,
    Episode,
    NameEpisode,
} from './style';

import generateRandomColor from '../../../functions/generateRandomColor';

interface episodesProps {
  episodes: [
    {
      id: number;
      name: string;
    }
  ]
}

const EpisodesChacacter: React.FC<episodesProps> = ({episodes}) => {
  return (
      <>
        <TitleEpisodes>Episódios: </TitleEpisodes>
      
        <ContainerEpisodes>
          {episodes.map(item => (
              <Episode key={item.id} color={generateRandomColor()}>
                  <NameEpisode>{item.name}</NameEpisode>
              </Episode>
          ))}  
        </ContainerEpisodes>
      </>
  );
}

export default EpisodesChacacter;