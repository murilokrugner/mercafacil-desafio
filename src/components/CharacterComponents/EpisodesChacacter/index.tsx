import React from 'react';
import { View } from 'react-native';

import {
    TitleEpisodes,
    ContainerEpisodes,
    Episode,
    NameEpisode,
} from './style';

import generateRandomColor from '../../../functions/generateRandomColor';

const EpisodesChacacter: React.FC = () => {
  return (
      <>
        <TitleEpisodes>Episódios: </TitleEpisodes>

        <ContainerEpisodes>
        <Episode color={generateRandomColor()}>
            <NameEpisode>Ep 1 soe</NameEpisode>
        </Episode>
        </ContainerEpisodes>
      </>
  );
}

export default EpisodesChacacter;