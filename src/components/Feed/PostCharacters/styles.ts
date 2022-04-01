import styled from 'styled-components/native';
import fonts from '../../../global/styles/fonts';

export const Container = styled.View`
  padding: 10px;

  width: 100%;
  height: 100%;
`;

export const ContainerPost = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 20px;

  background-color: ${({theme}) => theme.colors.primary};

  height: 250px;
  width: 100%;

  margin-bottom: 30px;
`;

export const ContainerStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: auto;
  width: 180px;
`;

export const ContainerTitlePost = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  height: 200px;
`;

export const ImagePost = styled.Image`
  width: 175px;
  height: 250px;

  border-radius: 20px;
`;

export const Name = styled.Text`
  font-size: 24px;
  font-weight: bold;
  font-family: ${fonts.bold};
  color: ${({theme}) => theme.colors.text};
`;

export const ContainerInfoPost = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  width: 185px;
  height: 250px;
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
  font-family: ${fonts.primary};
  color: ${({theme}) => theme.colors.text};
`;

export const TextInfo = styled.Text`
  font-size: 14px;
  font-family: ${fonts.primary};
  margin-left: 5px;

  color: ${({theme}) => theme.colors.text};
`;
