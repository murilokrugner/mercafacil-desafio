import React, {useCallback, useEffect, useState} from 'react';
import {Alert, FlatList} from 'react-native';
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
  focusInput: boolean;
  setFocusInput: (value: boolean) => void;
}

const PostEpisodes: React.FC<PostEpisodesProps> = ({order, search, focusInput, setFocusInput}) => {
  const navigation = useNavigation();

  const [datas, setDatas] = useState<dataItemEpisodes[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const loadEpisodes = useCallback(async () => {
    if (search.length > 0) {
        return
    }

    try {
      const response: dataEpisodes = await api(listAllEpisodes(page, null));

      setDatas([...datas, ...response.data.episodes.results]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [page]);

  const loadEpisodesSearch = useCallback(async () => {
    try {
      const response: dataEpisodes = await api(
        listAllEpisodes(page, `"${search}"`),
      );

      if (page > 1) {
        setDatas([...datas, ...response.data.episodes.results]);
        setFocusInput(false);
      } else {
        setDatas([...response.data.episodes.results]);
      }

    } catch (error) {
      setDatas([]);
    }
  }, [page, search]);

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

  function loadPage() {
    setPage(page + 1);
  }

  useEffect(() => {
    if (focusInput) {
        setPage(1);
    } 

    if (search.length > 0) {
      loadEpisodesSearch();
    } else {
      loadEpisodes();
    }

    return () => {};
  }, [loadEpisodesSearch, loadEpisodes, focusInput, page]);

  useEffect(() => {
    if (order !== null) {
      orderData();
      return;
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
