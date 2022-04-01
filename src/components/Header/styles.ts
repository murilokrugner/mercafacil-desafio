import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100px;

`;

export const TitleHeader = styled.Text`
  font-size: 24px;
  font-weight: bold;

  padding: 20px;
`;
