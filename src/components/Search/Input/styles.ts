import styled from 'styled-components/native';
import {windowWidth} from '../../../global/dimensions';

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  width: ${windowWidth - 40 + 'px'};
  background-color: ${({ theme }) => theme.colors.input};
  flex-direction: row;
  align-items: center;
  
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #000;
`;