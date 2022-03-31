import styled from 'styled-components/native';
import colors from '../../../global/styles/colors';

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

  height: 100px;
  width: 100%;

  margin-bottom: 30px;

`;

export const ContainerStatus = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: auto;
  width: 100px;
`;

export const Name = styled.Text`
  font-size: 17px;
  font-weight: bold;

  color: ${({theme}) => theme.colors.text};

`;

export const ContainerInfoPost = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  width: 170px;
  height: 80px;

  margin-left: 20px;
`;

export const ContainerName = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 320px;
  max-width: 320px;
  height: 32px;

`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  height: 32px;

`;

export const TitleInfo = styled.Text`
  font-size: 14px;
  font-weight: bold;

  color: ${({theme}) => theme.colors.text};
`;

export const TextInfo = styled.Text`
  font-size: 14px;

  margin-left: 5px;

  color: ${({theme}) => theme.colors.text};
`;
