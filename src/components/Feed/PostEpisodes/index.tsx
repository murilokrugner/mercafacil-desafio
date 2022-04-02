import React from 'react';
import { FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { 
    Container, 
    ContainerPost,
    ContainerStatus,
    Name, 
    ContainerInfoPost,
    ContainerName, 
    ContainerInfo,
    TitleInfo,
    TextInfo
} from './styles';

import rick from '../../../assets/rick.jpeg';

const PostEpisodes: React.FC = () => {
  const navigation = useNavigation();

  return (
      <Container>
        <ContainerPost onPress={() => {navigation.navigate('ViewEpisode')}}>

            <ContainerInfoPost>                
                <ContainerName>
                    <Name>Ep Fais</Name>

                    <TextInfo>No ar: 12/12/2021</TextInfo>
                </ContainerName>

                <ContainerInfo>
                    <TitleInfo>cd5s</TitleInfo>
                    <TitleInfo>Ver mais ➢</TitleInfo>
                </ContainerInfo>

            </ContainerInfoPost>
        </ContainerPost>
      </Container>
  );
}

export default PostEpisodes;