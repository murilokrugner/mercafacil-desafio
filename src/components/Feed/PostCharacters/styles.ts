import styled from 'styled-components/native';
import colors from '../../../global/styles/colors';

export const Container = styled.View`
   padding: 10px;
`;

export const ContainerPost = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border: 0.2px;
  border-radius: 20px;

  background-color: ${colors.primary};

  height: 200px;
  width: 100%;
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

  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ContainerInfoPost = styled.View`
  width: 170px;
  height: 100%;
`;

export const ContainerInfo = styled.View`
  flex-direction: column;

  margin-bottom: 20px;
`;

export const TitleInfo = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const TextInfo = styled.Text`
  margin-left: 12px;
  font-size: 14px;
  margin-top: 5px;
`;
