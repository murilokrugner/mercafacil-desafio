import React, {Dispatch, SetStateAction } from 'react';
import { Container, ContainerHeader, TitleHeader, ContainerInput } from './styles';
import Input from '../Search/Input';
import PickerFilter from '../Search/PickerFilter';

interface HeaderProps {
    title: string;
    setOrder?:  Dispatch<SetStateAction<null>> | Dispatch<SetStateAction<string>>;
    setSearch?:  Dispatch<SetStateAction<string>> | any;
    itemsFilter: {label: string, value: string}[];
}

const Header: React.FC<HeaderProps> = ({title, setOrder, setSearch, itemsFilter}) => {
  return (
      <Container>
          <ContainerHeader>
            <TitleHeader>{title}</TitleHeader>
            <PickerFilter setOrder={setOrder} itemsFilter={itemsFilter} />
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