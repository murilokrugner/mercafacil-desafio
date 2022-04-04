import React, {useState} from 'react';

import {Container} from './styles';

import Header from '../../../components/Header';
import PostCharacters from '../../../components/Feed/PostCharacters';

const Characters: React.FC = () => {
  const [order, setOrder] = useState(null);
  const [search, setSearch] = useState('');
  const [focusInput, setFocusInput] = useState(false);
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
        setFocusInput={setFocusInput}
        itemsFilter={itemsFilter}
      />

      <PostCharacters order={order} search={search} 
        focusInput={focusInput} 
        setFocusInput={setFocusInput}
        />
    </Container>
  );
};

export default Characters;
