import styled from 'styled-components/native';
import {windowWidth} from '../../../global/dimensions';

export const Container = styled.View`
  width: auto;
  height: 200px;
  left: ${windowWidth - 180 + 'px'};
  position: absolute;
`;
