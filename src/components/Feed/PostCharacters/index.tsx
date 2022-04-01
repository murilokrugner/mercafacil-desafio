import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/native';

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

import api from '../../../services/api';
import listAllCharacters from '../../../queries/queryCharacter/listAllCharacters';
import {orderName, orderStatus, orderSpecies} from '../../../functions/orderArray';
import Loading from '../../Loading';

interface dataCharacters {
    data: {
      characters: {
        info: {
          count: number;
        },
        results: [
          {
            id: number;
            name: string;
            status: string;
            species: string;
            image: string;
            location: {
              name: string;
            };
            episode: [
              {
                id: number,
                name: string;
              }
            ]
          },
        ]
      }
    }
}

interface dataItemCharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    location: {
      name: string;
    };
    episode: [
      {
        id: number,
        name: string;
      }
    ]
}

interface PostCharactersProps {
  order: string | null;
  search: string;
}

const PostCharacters: React.FC<PostCharactersProps> = ({order, search}) => {
  const navigation = useNavigation();

  const [datas, setDatas] = useState<dataItemCharacter[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  async function loadCharacters() {
      if (loadingData) {
        return;
      }

      if (isSearch) {
        setDatas([]);
        setPage(1);
        setIsSearch(false);
      }

      try {   
         setLoadingData(true);

         const response: dataCharacters = await api(listAllCharacters(page, null));         

         setDatas([...datas, ...response.data.characters.results]);

         setLoading(false);
         setLoadingData(false);
        } catch (error) {          
          setLoading(false);
          setLoadingData(false);
      }
  }

  async function loadCharactersSearch() {
    if (isOrder) {
      return;
    }

    try {     
        setLoadingData(true);
        setIsSearch(true);
        
       const response: dataCharacters = await api(listAllCharacters(null, `"${search}"`));

       setDatas([...response.data.characters.results]);

       setLoadingData(false);
      } catch (error) {          

    }
  }

  function orderData() {
    let data = datas;

    switch (order) {
      case 'name':
        setDatas(data.sort(orderName));
        break;
      case 'status':
        setDatas(data.sort(orderStatus));
        break
      case 'species':
        setDatas(data.sort(orderSpecies));
        break;
      default: 
    }
  }

  function loadPage() {
    setPage(page + 1);
  }
  
  useEffect(() => {
    if (search.length > 0) {
      loadCharactersSearch();
    } else {
      loadCharacters();
    }

    return () => {}
  }, [page, search]);

  useEffect(() => {
    if (order !== null) {
      setIsOrder(true);
      orderData();
    } else {
      setIsOrder(false);
    }
  }, [order]);
  
  return (
      <Container>
          {loading ? (
              <Loading color="#000" size="large" />
          ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={datas}          
                onEndReached={loadPage}
                onEndReachedThreshold={5}   
                style={{flex: 1}}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item, index}) => (
                <ContainerPost onPress={() => {navigation.navigate('ViewCharacter', item)}}>
                    <ContainerTitlePost>
                        <ImagePost source={{uri: item.image}}/>
                    </ContainerTitlePost>
    
                    <ContainerInfoPost>                
                        <ContainerName>
                            <Name>{item.name}</Name>
    
                            <ContainerStatus>
                                <TextInfo>{item.status} - {item.species}</TextInfo>
                            </ContainerStatus>
                        </ContainerName>
    
                        <ContainerInfo>
                            <TitleInfo>Last known location:</TitleInfo>
                            <TextInfo>{item.location.name}</TextInfo>
                        </ContainerInfo>
    
                        <ContainerInfo>
                            <TitleInfo>First seen in:</TitleInfo>
                            <TextInfo>{item.episode[0].name}</TextInfo>
                        </ContainerInfo>
    
                    </ContainerInfoPost>
                </ContainerPost>
                )}
            />
          )}        
      </Container>
  );
}

export default PostCharacters;