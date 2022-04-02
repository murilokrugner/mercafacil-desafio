import React from 'react';
import {ScrollView} from 'react-native';

import {
  Container,
  ContainerNameEpisode,
  NameEpisode,
  DateEpisode,
  CodeEpisode,
} from './styles';

import CharactersEpisode from '../CharactersEpisode';
import Separation from '../../Separation';
import {useRoute} from '@react-navigation/native';
interface dataItemEpisodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: {
    id: number;
    name: string;
    image: string;
  };
}

const InfoEpisode: React.FC = () => {
  const route = useRoute();

  const data: dataItemEpisodes | any = route.params;

  return (
    <ScrollView>
      <Container>
        <ContainerNameEpisode>
          <NameEpisode>{data.name}</NameEpisode>
          <CodeEpisode>{data.episode}</CodeEpisode>
        </ContainerNameEpisode>

        <DateEpisode>Air Date: {data.air_date}</DateEpisode>

        <Separation />

        <CharactersEpisode characters={data.characters} />
      </Container>
    </ScrollView>
  );
};

export default InfoEpisode;
