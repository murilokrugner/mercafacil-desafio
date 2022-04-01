import React from 'react';
import { Container } from './styles';
import {TextInput} from 'react-native-paper';
import {useContext} from 'react';
import GlobalStyleContext from '../../../context/GlobalStyleContext';

interface globalStyles {
  colors: {
    primary: string;
    text: string;
  };
}

const Input: React.FC = () => {
  const globalStyle : globalStyles = useContext(GlobalStyleContext);

  return (
      <Container>
        <TextInput
            label="Pesquisa"
            mode="outlined"   
            theme={{
              colors: {
                placeholder: globalStyle.colors.text,
                text: globalStyle.colors.text,
                primary: globalStyle.colors.text,
                background: globalStyle.colors.primary,
              },
            }}         
        />
      </Container>
  );
}

export default Input;