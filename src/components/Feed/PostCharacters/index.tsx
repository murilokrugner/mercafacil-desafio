import React, {useEffect, useState, useCallback} from 'react';
import {FlatList} from 'react-native';
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
  TextInfo,
} from './styles';

import api from '../../../services/api';
import listAllCharacters from '../../../queries/queryCharacter/listAllCharacters';
import {
  orderName,
  orderStatus,
  orderSpecies,
} from '../../../functions/orderArray';
import Loading from '../../Loading';

interface dataCharacters {
  data: {
    characters: {
      info: {
        count: number;
      };
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
              id: number;
              name: string;
            },
          ];
        },
      ];
    };
  };
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
      id: number;
      name: string;
    },
  ];
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

  const loadCharacters = useCallback(async () => {
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
  }, [page]);

  const loadCharactersSearch = useCallback(async () => {
    if (loadingData) {
      return;
    }

    if (isOrder) {
      return;
    }

    try {
      setLoadingData(true);
      setIsSearch(true);

      const response: dataCharacters = await api(
        listAllCharacters(null, `"${search}"`),
      );

      setDatas([...response.data.characters.results]);

      setLoadingData(false);
    } catch (error) {}
  }, [search]);

  const orderData = useCallback(() => {        
    let newData = datas;
    
    switch (order) {
      case 'name':
        newData.sort(orderName);
        setDatas(newData);
        break;
      case 'status':
        newData.sort(orderStatus);
        setDatas(newData);
        break;
      case 'species':
        newData.sort(orderSpecies);
        setDatas(newData);
        break;
      default:
    }

  }, [order]);

  function loadPage() {
    setPage(page + 1);
  }

  useEffect(() => {
    if (search.length > 0) {
      loadCharactersSearch();
    } else {
      loadCharacters();
    }

    return () => {};
  }, [loadCharactersSearch, loadCharacters]);

  useEffect(() => {
    if (order !== null) {
      setIsOrder(true);      
      orderData();
    } else {
      setIsOrder(false);
    }
  }, [orderData]);

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
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <ContainerPost
              onPress={() => {
                navigation.navigate('ViewCharacter', item);
              }}>
              <ContainerTitlePost>
                <ImagePost source={{uri: item.image}} />
              </ContainerTitlePost>

              <ContainerInfoPost>
                <ContainerName>
                  <Name>{item.name}</Name>

                  <ContainerStatus>
                    <TextInfo>
                      {item.status} - {item.species}
                    </TextInfo>
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
};

export default PostCharacters;
