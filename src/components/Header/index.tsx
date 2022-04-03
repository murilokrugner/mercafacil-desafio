import React, {Dispatch, SetStateAction} from 'react';
import {
  Container,
  ContainerHeader,
  TitleHeader,
  ContainerInput,
} from './styles';
import Input from '../Search/Input';
import PickerFilter from '../Search/PickerFilter';

interface HeaderProps {
  title: string;
  setOrder?: Dispatch<SetStateAction<null>> | Dispatch<SetStateAction<string>>;
  setSearch?: Dispatch<SetStateAction<string>> | any;
  setFocusInput?: Dispatch<SetStateAction<boolean>> | any;
  itemsFilter: {label: string; value: string}[];
}

const Header: React.FC<HeaderProps> = ({
  title,
  setOrder,
  setSearch,
  setFocusInput,
  itemsFilter,
}) => {
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
          placeholder="Search"
          returnKeyType="next"
          setSearch={setSearch}
          setFocusInput={setFocusInput}
        />
      </ContainerInput>
    </Container>
  );
};

export default Header;
