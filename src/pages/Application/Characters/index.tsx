import React, {useState} from 'react';

import { Container } from './styles';

import Header from '../../../components/Header';
import PostCharacters from '../../../components/Feed/PostCharacters';

const Characters: React.FC = () => {
  const [order, setOrder] = useState(null);
  const [search, setSearch] = useState(null);

  return (
      <Container>
          <Header 
              title={"Personagens"} 
              setOrder={setOrder} 
              setSearch={setSearch}
            />

          <PostCharacters 
            order={order}
            search={search}
          />
      </Container>
  );
}

export default Characters;