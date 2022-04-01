import React from 'react';
import { Container, ContainerHeader, TitleHeader } from './styles';
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

          <Input />
          
      </Container>
  );
}

export default Header;