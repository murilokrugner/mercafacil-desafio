import styled from 'styled-components/native';
import fonts from '../../../global/styles/fonts';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const ContainerNameEpisode = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: auto;

  padding: 20px;
`;

export const NameEpisode = styled.Text`
  font-size: 22px;
  font-weight: bold;
  font-family: ${fonts.bold};
  color: ${({theme}) => theme.colors.text};
`;

export const DateEpisode = styled.Text`
  font-size: 16px;
  font-family: ${fonts.primary};
  margin-left: 20px;

  color: ${({theme}) => theme.colors.text};
`;

export const CodeEpisode = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
  font-family: ${fonts.primary};
`;
