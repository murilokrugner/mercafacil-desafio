import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
`;

export const Title = styled.Text`
  margin-left: 20px;

  font-size: 20px;
  font-weight: bold;
`;

export const ContainerCharacters = styled.View`
  margin-top: 10px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  height: 100%;

  padding: 5px;
`;

export const Character = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 120px;
  height: 150px;

  margin-bottom: 30px;

  border: 0.5px;

`;

export const ImageCharacter = styled.Image`
  width: 120px;
  height: 120px;

`;

export const NameCharacter = styled.Text`
  font-size: 18px;
  font-weight: bold;

`;
1