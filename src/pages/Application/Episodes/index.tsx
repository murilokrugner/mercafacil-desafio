import React, {useState} from 'react';
import Header from '../../../components/Header';

import {Container} from './styles';

import PostEpisodes from '../../../components/Feed/PostEpisodes';

const Episodes: React.FC = () => {
  const [order, setOrder] = useState(null);
  const [search, setSearch] = useState('');
  const itemsFilter = [
    {label: 'Name', value: 'name'},
    {label: 'Date', value: 'date'},
  ];

  return (
    <Container>
      <Header
        title={'Episodes'}
        setOrder={setOrder}
        setSearch={setSearch}
        itemsFilter={itemsFilter}
      />

      <PostEpisodes order={order} search={search} />
    </Container>
  );
};

export default Episodes;
