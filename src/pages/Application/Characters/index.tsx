import React, {useState} from 'react';

import {Container} from './styles';

import Header from '../../../components/Header';
import PostCharacters from '../../../components/Feed/PostCharacters';

const Characters: React.FC = () => {
  const [order, setOrder] = useState(null);
  const [search, setSearch] = useState('');
  const itemsFilter = [
    {label: 'Name', value: 'name'},
    {label: 'Status', value: 'status'},
    {label: 'Specie', value: 'species'},
  ];

  return (
    <Container>
      <Header
        title={'Characters'}
        setOrder={setOrder}
        setSearch={setSearch}
        itemsFilter={itemsFilter}
      />

      <PostCharacters order={order} search={search} />
    </Container>
  );
};

export default Characters;
