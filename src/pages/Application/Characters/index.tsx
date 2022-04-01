import React, {useContext} from 'react';
import { Text } from 'react-native';

import { Container } from './styles';

import Header from '../../../components/Header';
import PostCharacters from '../../../components/Feed/PostCharacters';

const Characters: React.FC = () => {
  return (
      <Container>
          <Header title={"Personagens"} />

          <PostCharacters />
      </Container>
  );
}

export default Characters;