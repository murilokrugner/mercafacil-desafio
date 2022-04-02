import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

const Loading: React.FC = ({color, size}: string | any) => {
  return (
      <Container>
          <ActivityIndicator color={color} size={size} />
      </Container>
  );
}

export default Loading;