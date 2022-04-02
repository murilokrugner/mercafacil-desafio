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

const InfoCharacter: React.FC = () => {
  return (
    <ScrollView style={{height: '100%'}}>
      <Container>
          <ImageCharacter source={Rick} />
                    
            <ContainerNameCharacter>
              <NameCharacter>Rick</NameCharacter>

              <TextInfoCharacter>Alive - Alien</TextInfoCharacter>
            </ContainerNameCharacter>

            <ContainerInfoCharacter>
              <TitleInfoCharacter>Last known location:</TitleInfoCharacter>
              <TextInfoCharacter>Citadel of Ricks</TextInfoCharacter>
            </ContainerInfoCharacter>

            <ContainerInfoCharacter>
              <TitleInfoCharacter>Last known location:</TitleInfoCharacter>
              <TextInfoCharacter>Citadel of Ricks</TextInfoCharacter>
            </ContainerInfoCharacter>

            <EpisodesChacacter />
          </Container>
      </ScrollView>
  );
}

export default InfoCharacter;