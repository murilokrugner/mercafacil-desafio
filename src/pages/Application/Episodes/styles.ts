import styled from 'styled-components/native';
import {windowHeight} from '../../../global/dimensions';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;

  flex-direction: column;
  justify-content: space-between;

  margin-bottom: ${Platform.OS === 'ios'
    ? windowHeight - 700 + 'px'
    : windowHeight - 600 + 'px'};
`;
