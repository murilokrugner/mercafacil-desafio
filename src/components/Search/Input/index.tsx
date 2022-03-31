import React, {forwardRef, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

interface InputProps {
  style: object;
  icon: string;
  ref: string;
  setSearch: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ style, icon, setSearch, ...rest }, ref) =>  {
  
  return (
    <Container style={style}>
      { icon && <Icon name={icon} size={20} color="#000" /> }
      <TInput {...rest} ref={ref}
        onChangeText={text => setSearch(text)}
        defaultValue={''}
      />
    </Container>
  );
}


export default forwardRef(Input);