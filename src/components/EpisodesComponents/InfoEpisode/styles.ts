import styled from 'styled-components/native';

export const Container = styled.View`
  

  width: 100%;
  height: 100%;
`;

export const ContainerNameEpisode = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: auto;

  padding: 20px;
`;

export const NameEpisode = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const DateEpisode = styled.Text`
  font-size: 16px;

  margin-left: 20px;
`;

export const CodeEpisode = styled.Text`

  font-size: 20px;
`;
