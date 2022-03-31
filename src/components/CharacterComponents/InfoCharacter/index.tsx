import React from 'react';
import {ScrollView} from 'react-native';

import Rick from '../../../assets/rick.jpeg';

import { 
    Container, 
    ImageCharacter, 
    ContainerInfoCharacter, 
    ContainerNameCharacter, 
    NameCharacter,
    TitleInfoCharacter,
    TextInfoCharacter,
     
} from './styles';

import EpisodesChacacter from '../EpisodesChacacter';
import { useRoute } from '@react-navigation/native';

interface dataItemCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
  episode: [
    {
      id: number,
      name: string;
    }
  ]
}


const InfoCharacter: React.FC = () => {
  const route = useRoute();

  const data: dataItemCharacter | any = route.params;

  return (
    <ScrollView style={{height: '100%'}}>
      <Container>
          <ImageCharacter source={{uri: data.image}} />
                    
            <ContainerNameCharacter>
              <NameCharacter>{data.name}</NameCharacter>

              <TextInfoCharacter>Alive - Alien</TextInfoCharacter>
            </ContainerNameCharacter>

            <ContainerInfoCharacter>
              <TitleInfoCharacter>Last known location:</TitleInfoCharacter>
              <TextInfoCharacter>{data.location.name}</TextInfoCharacter>
            </ContainerInfoCharacter>

            <ContainerInfoCharacter>
              <TitleInfoCharacter>Last known location:</TitleInfoCharacter>
              <TextInfoCharacter>{data.episode[0].name}</TextInfoCharacter>
            </ContainerInfoCharacter>

            <EpisodesChacacter episodes={data.episode}/>
          </Container>
      </ScrollView>
  );
}

export default InfoCharacter;