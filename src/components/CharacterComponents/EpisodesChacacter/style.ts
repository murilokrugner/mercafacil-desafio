import styled from 'styled-components';
import fonts from '../../../global/styles/fonts';

export const TitleEpisodes = styled.Text`
  font-size: 24px;
  font-weight: bold;

  margin-top: 40px;
  margin-left: 20px;

  color: ${({theme}) => theme.colors.text};

  font-family: ${fonts.bold};
`;

export const ContainerEpisodes = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;

  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Episode = styled.View`
  justify-content: center;
  align-items: center;

  width: auto;
  height: auto;
  background-color: ${props => props.color};
  border: 1px;

  border-radius: 50px;
  margin-bottom: 20px;

  padding: 10px;
`;

export const NameEpisode = styled.Text`
  font-size: 20px;
  color: #fff;

  font-family: ${fonts.primary};
`;
