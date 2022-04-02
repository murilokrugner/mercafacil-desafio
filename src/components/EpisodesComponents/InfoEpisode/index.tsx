import React from 'react';
import { View } from 'react-native';

import { 
    Container,
    ContainerNameEpisode,
    NameEpisode,
    DateEpisode,
    CodeEpisode
} from './styles';

import CharactersEpisode from '../CharactersEpisode';
import Line from '../../Line';

const InfoEpisode: React.FC = () => {
  return (
      <Container>
          <ContainerNameEpisode>
              <CodeEpisode>5s5s</CodeEpisode>
              <NameEpisode>Nome do episodio</NameEpisode>
          </ContainerNameEpisode>
              
          <DateEpisode>No ar: 20/12/2021</DateEpisode>

          <Line />

          <CharactersEpisode />
      </Container>
  );
}

export default InfoEpisode;