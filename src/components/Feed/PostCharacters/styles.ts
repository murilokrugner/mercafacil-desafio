import styled from 'styled-components/native';
import colors from '../../../global/styles/colors';

export const Container = styled.View`
   padding: 10px;
`;

export const ContainerPost = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 0.2px;
  border-radius: 20px;

  background-color: ${({theme}) => theme.colors.primary};

  height: 200px;
  width: 100%;
`;

export const ContainerStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: auto;
  width: 100px;
`;

export const ContainerTitlePost = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 200px;
`;

export const ImagePost = styled.Image`
  width: 185px;
  height: 100%;

  border-radius: 20px;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;

`;

export const ContainerInfoPost = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  width: 170px;
  height: 200px;

`;

export const ContainerName = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: auto;
  height: auto;

`;

export const ContainerInfo = styled.View`
  flex-direction: column;

`;

export const TitleInfo = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const TextInfo = styled.Text`
  font-size: 14px;

  margin-left: 5px;
`;
