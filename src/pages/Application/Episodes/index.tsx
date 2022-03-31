import React, { useState } from 'react';
import { View } from 'react-native';
import Header from '../../../components/Header';

import { Container } from './styles';

import PostEpisodes from '../../../components/Feed/PostEpisodes';

const Episodes: React.FC = () => {
  const [order, setOrder] = useState(null);
  const [search, setSearch] = useState('');

  return (
      <Container>
          <Header title={"Episódios"} 
             setOrder={setOrder} 
             setSearch={setSearch}
          />

          <PostEpisodes 
             order={order}
             search={search}
          />
      </Container>
  );
}

export default Episodes;