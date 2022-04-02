import styled from 'styled-components/native';

export const Container = styled.View`
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
  height: 40px;
`;

export const NameCharacter = styled.Text`
  font-weight: bold;
  font-size: 32px;

  margin-top: 20px;
  margin-left: 20px;
`;

export const TitleInfoCharacter = styled.Text`
  font-size: 18px;
  margin-left: 20px;
`;

export const TextInfoCharacter = styled.Text`
  font-size: 20px;

  margin-top: 20px;
  margin-left: 25px;
`;
