import styled from 'styled-components/native';
import fonts from '../../global/styles/fonts';

export const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100px;
`;

export const TitleHeader = styled.Text`
  font-size: 24px;
  font-weight: bold;
  font-family: ${fonts.bold};
  padding: 20px;

  color: ${({theme}) => theme.colors.text};
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;

  margin-bottom: 20px;
`;
