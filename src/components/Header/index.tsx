import React from 'react';
import { Container, ContainerHeader, TitleHeader, ContainerInput } from './styles';
import Input from '../Search/Input';
import PickerFilter from '../Search/PickerFilter';

interface HeaderProps {
    title: string;
    setOrder: () => void;
    setSearch: () => void;
}

const Header: React.FC<HeaderProps> = ({title, setOrder, setSearch}) => {
  return (
      <Container>
          <ContainerHeader>
            <TitleHeader>{title}</TitleHeader>
            <PickerFilter setOrder={setOrder} />
          </ContainerHeader>

          <ContainerInput>
            <Input 
              icon="search"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Pesquisa"
              returnKeyType="next"
              setSearch={setSearch}
            />
          </ContainerInput>
          
      </Container>
  );
}

export default Header;