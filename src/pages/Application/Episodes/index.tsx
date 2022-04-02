import React from 'react';
import { View } from 'react-native';
import Header from '../../../components/Header';

import { Container } from './styles';

import PostEpisodes from '../../../components/Feed/PostEpisodes';

const Episodes: React.FC = () => {
  return (
      <Container>
          <Header title={"Episódios"} />

          <PostEpisodes />
      </Container>
  );
}

export default Episodes;