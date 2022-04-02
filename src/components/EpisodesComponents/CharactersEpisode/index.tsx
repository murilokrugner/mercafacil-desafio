import React from 'react';
import Rick from '../../../assets/rick.jpeg';

import { 
    Container, 
    Title, 
    ContainerCharacters, 
    Character, 
    ImageCharacter, 
    NameCharacter 
} from './styles';

const CharactersEpisode: React.FC = () => {
  return (
      <Container>
          <Title>Personagens do episódio: </Title>

          <ContainerCharacters>
              <Character>
                  <ImageCharacter source={Rick}/>
                  <NameCharacter>Rick</NameCharacter>
              </Character>
              <Character>
                  <ImageCharacter source={Rick}/>
                  <NameCharacter>Rick</NameCharacter>
              </Character>
              <Character>
                  <ImageCharacter source={Rick}/>
                  <NameCharacter>Rick</NameCharacter>
              </Character>
              <Character>
                  <ImageCharacter source={Rick}/>
                  <NameCharacter>Rick</NameCharacter>
              </Character>
          </ContainerCharacters>
      </Container>
  );
}

export default CharactersEpisode;