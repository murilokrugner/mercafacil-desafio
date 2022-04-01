import React from 'react';

import {
  Container,
  Title,
  ContainerCharacters,
  Character,
  ImageCharacter,
  NameCharacter,
} from './styles';

interface charactersProps {
  characters: {
    id: number;
    name: string;
    image: string;
  };
}

const CharactersEpisode: React.FC<charactersProps> = ({characters}) => {
  return (
    <Container>
      <Title>Episode characters: </Title>

      <ContainerCharacters>
        {characters.map(item => (
          <Character key={item.id}>
            <ImageCharacter source={{uri: item.image}} />
            <NameCharacter>{item.name}</NameCharacter>
          </Character>
        ))}
      </ContainerCharacters>
    </Container>
  );
};

export default CharactersEpisode;
