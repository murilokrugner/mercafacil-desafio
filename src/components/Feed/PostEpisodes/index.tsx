import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ContainerPost,
  Name,
  ContainerInfoPost,
  ContainerName,
  ContainerInfo,
  TitleInfo,
  TextInfo,
} from './styles';

import api from '../../../services/api';
import listAllEpisodes from '../../../queries/queryEpisode/listAllEpisodes';
import Loading from '../../Loading';

import {orderName, orderAirDate} from '../../../functions/orderArray';

interface dataEpisodes {
  data: {
    episodes: {
      info: {
        count: number;
      };
      results: [
        {
          id: number;
          name: string;
          air_date: string;
          episode: string;
          characters: {
            id: number;
            name: string;
            image: string;
          };
        },
      ];
    };
  };
}

interface dataItemEpisodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: {
    id: number;
    name: string;
    image: string;
  };
}
interface PostEpisodesProps {
  order: string | null;
  search: string;
}

const PostEpisodes: React.FC<PostEpisodesProps> = ({order, search}) => {
  const navigation = useNavigation();
  const [datas, setDatas] = useState<dataItemEpisodes[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isOrder, setIsOrder] = useState(false);

  const loadEpisodes = useCallback(async () => {
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

      const response: dataEpisodes = await api(listAllEpisodes(page, null));

      setDatas([...datas, ...response.data.episodes.results]);

      setLoading(false);
      setLoadingData(false);
    } catch (error) {
      setLoading(false);
    }
  }, [page]);

  const loadEpisodesSearch = useCallback(async () => {
    if (loadingData) {
      return;
    }

    if (isOrder) {
      return;
    }

    try {
      setLoadingData(true);
      setIsSearch(true);

      const response: dataEpisodes = await api(
        listAllEpisodes(null, `"${search}"`),
      );

      setDatas([...response.data.episodes.results]);

      setLoadingData(false);
    } catch (error) {}
  }, [search]);

  function loadPage() {
    setPage(page + 1);
  }

  const orderData = useCallback(() => {
    let newData = datas;

    switch (order) {
      case 'name':
        newData.sort(orderName);
        setDatas(newData);
        break;
      case 'date':
        newData.sort(orderAirDate);
        setDatas(newData);
        break;
      default:
    }
  }, [order]);

  useEffect(() => {
    if (search.length > 0) {
      loadEpisodesSearch();
    } else {
      loadEpisodes();
    }
  }, [loadEpisodesSearch, loadEpisodes]);

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
          onEndReachedThreshold={0.5}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <ContainerPost
              onPress={() => {
                navigation.navigate('ViewEpisode', item);
              }}>
              <ContainerInfoPost>
                <ContainerName>
                  <Name>{item.name}</Name>
                  <TextInfo>{item.episode}</TextInfo>
                </ContainerName>

                <ContainerInfo>
                  <TitleInfo>Air Date: {item.air_date} </TitleInfo>
                  <TitleInfo>View more ➢</TitleInfo>
                </ContainerInfo>
              </ContainerInfoPost>
            </ContainerPost>
          )}
        />
      )}
    </Container>
  );
};

export default PostEpisodes;
