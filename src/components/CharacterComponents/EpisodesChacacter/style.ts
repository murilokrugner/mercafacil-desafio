import styled from 'styled-components';

export const TitleEpisodes = styled.Text`
  font-size: 24px;
  font-weight: bold;

  margin-top: 40px;
  margin-left: 20px;
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

  width: 120px;
  height: 50px;
  background-color: ${props => props.color}
  border: 1px;

  border-radius: 50px;

  margin-bottom: 20px;

`;

export const NameEpisode = styled.Text`
  font-size: 20px;
  color: #fff;
`;
