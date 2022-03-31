import styled from 'styled-components/native';
import {windowHeight} from '../../../global/dimensions';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;

  flex-direction: column;
  justify-content: space-between;

  margin-bottom: ${windowHeight - 700 + 'px'};
`;
