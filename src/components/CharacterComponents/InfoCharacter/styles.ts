import styled from 'styled-components/native';
import fonts from '../../../global/styles/fonts';

export const Container = styled.View`
  height: 100%;
`;

export const ContainerScrollView = styled.ScrollView`
  height: 100%;
`;

export const ImageCharacter = styled.Image`
  width: 100%;
  height: 250px;
`;

export const ContainerNameCharacter = styled.View`
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  width: auto;
  height: 70px;
`;

export const ContainerInfoCharacter = styled.View`
  margin-top: 40px;

  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  width: auto;
  height: 60px;
`;

export const NameCharacter = styled.Text`
  font-weight: bold;
  font-size: 32px;

  margin-top: 20px;
  margin-left: 20px;

  color: ${({theme}) => theme.colors.text};

  font-family: ${fonts.bold};
`;

export const TitleInfoCharacter = styled.Text`
  font-size: 18px;
  margin-left: 20px;

  color: ${({theme}) => theme.colors.text};

  font-family: ${fonts.primary};
`;

export const TextInfoCharacter = styled.Text`
  font-size: 20px;

  margin-top: 20px;
  margin-left: 25px;

  color: ${({theme}) => theme.colors.text};

  font-family: ${fonts.primary};
`;
