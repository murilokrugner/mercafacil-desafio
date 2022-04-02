import React from 'react';
import { View } from 'react-native';
import InfoEpisode from '../../../../components/EpisodesComponents/InfoEpisode';

import { Container } from './styles';

const ViewEpisode: React.FC = () => {
  return (
    <Container>
        <InfoEpisode />
    </Container>
  );
}

export default ViewEpisode;