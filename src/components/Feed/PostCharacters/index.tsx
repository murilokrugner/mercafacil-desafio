import React from 'react';
import { FlatList } from 'react-native';

import { 
    Container, 
    ContainerPost, 
    ContainerTitlePost, 
    ImagePost, 
    Name, 
    ContainerInfoPost,
    ContainerInfo,
    TitleInfo,
    TextInfo
} from './styles';

import rick from '../../../assets/rick.jpeg';

const PostCharacters: React.FC = () => {
  return (
      <Container>
        <ContainerPost>
            <ContainerTitlePost>
                <ImagePost source={rick}/>
            </ContainerTitlePost>

            <ContainerInfoPost>
                <ContainerInfo>
                <Name>Rick</Name>
                    <TitleInfo>Último local conhecido: </TitleInfo>
                    <TextInfo>Ep1, Ep2, Ep3</TextInfo>
                </ContainerInfo>
                <ContainerInfo>
                    <TitleInfo>Visto pela primeira vez em: </TitleInfo>
                    <TextInfo>1, 2, ,3</TextInfo>
                </ContainerInfo>
            </ContainerInfoPost>
        </ContainerPost>
      </Container>
  );
}

export default PostCharacters;