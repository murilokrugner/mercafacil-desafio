import React, { forwardRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

interface InputProps {
  style: object;
  icon: string;
  ref: string;
}

const Input: React.FC<InputProps> = ({ style, icon, ...rest }, ref) =>  {
  return (
    <Container style={style}>
      { icon && <Icon name={icon} size={20} color="#000" /> }
      <TInput {...rest} ref={ref}/>
    </Container>
  );
}


export default forwardRef(Input);