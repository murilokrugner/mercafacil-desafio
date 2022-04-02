import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { client } from '../../../config/client-graphql';
import { gql } from '@apollo/client';

import { 
    Container, 
    ContainerPost,
    ContainerTitlePost, 
    ContainerStatus,
    ImagePost, 
    Name, 
    ContainerInfoPost,
    ContainerName, 
    ContainerInfo,
    TitleInfo,
    TextInfo
} from './styles';

import rick from '../../../assets/rick.jpeg';

const PostCharacters: React.FC = () => {
  const navigation = useNavigation();

  const [datas, setDatas] = useState(null);

  async function loadCharacters() {
      try {
        client.query({
            query: gql`
                query {
                    characters(page: 2, filter: { name: "rick" }) {
                    info {
                        count
                    }
                    results {
                        name
                    }
                    }
                    location(id: 1) {
                    id
                    }
                    episodesByIds(ids: [1, 2]) {
                    id
                  }
                }
            `,
        }).then(res => console.log(res));
      } catch (error) {
          
      }
  }
  
  useEffect(() => {
    loadCharacters();
  }, []);

  return (
      <Container>
        <ContainerPost onPress={() => {navigation.navigate('ViewCharacter')}}>
            <ContainerTitlePost>
                <ImagePost source={rick}/>
            </ContainerTitlePost>

            <ContainerInfoPost>                
                <ContainerName>
                    <Name>Rick</Name>

                    <ContainerStatus>
                        <TextInfo>Alive - Alien</TextInfo>
                    </ContainerStatus>
                </ContainerName>

                <ContainerInfo>
                    <TitleInfo>Last known location:</TitleInfo>
                    <TextInfo>Nuptia 4</TextInfo>
                </ContainerInfo>

                <ContainerInfo>
                    <TitleInfo>First seen in:</TitleInfo>
                    <TextInfo>Mortynight Run</TextInfo>
                </ContainerInfo>

            </ContainerInfoPost>
        </ContainerPost>
      </Container>
  );
}

export default PostCharacters;