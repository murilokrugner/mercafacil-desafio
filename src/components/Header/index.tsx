import React from 'react';
import { Container, ContainerHeader, TitleHeader, ContainerInput } from './styles';
import Input from '../Search/Input';
import PickerFilter from '../Search/PickerFilter';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
      <Container>
          <ContainerHeader>
            <TitleHeader>{title}</TitleHeader>
            <PickerFilter />
          </ContainerHeader>

          <ContainerInput>
            <Input 
              icon="search"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Pesquisa"
              returnKeyType="next"
            />
          </ContainerInput>
          
      </Container>
  );
}

export default Header;