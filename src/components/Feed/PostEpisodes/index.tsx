import React, { useEffect, useState } from 'react';
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

import api from '../../../services/api';
import listAllEpisodes from '../../../queries/queryEpisode/listAllEpisodes';
import Loading from '../../Loading';

import {orderName, orderAirDate} from '../../../functions/orderArray';

interface dataEpisodes {
    data: {
        episodes: {
            info: {
                count: number;
            },
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
                    }
                }
            ]
        }
    }
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
    }
}
interface PostEpisodesProps {
    order: string;
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
  
    async function loadEpisodes() {
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
    }

    async function loadEpisodesSearch() { 
        if (loadingData) {
            return;
        }  

        try { 
            setLoadingData(true);
            setIsSearch(true);
            
            const response: dataEpisodes = await api(listAllEpisodes(null, `"${search}"`));             
            
            setDatas([...response.data.episodes.results]);
            
            setLoadingData(false);
        } catch (error) {          
        }        
    }

    function loadPage() {
        setPage(page + 1);
    }

    function orderData() {
        let data = datas;
    
        switch (order) {
          case 'name':
            setDatas(data.sort(orderName));
            break;
          case 'date':
            setDatas(data.sort(orderAirDate));
            break
          default: 
        }
      }

    useEffect(() => {
        if (search.length > 0) {            
            loadEpisodesSearch();
        } else {
            loadEpisodes();
        }
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
            onEndReachedThreshold={0.5} 
            style={{flex: 1}}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item, index}) => (
                <ContainerPost onPress={() => {navigation.navigate('ViewEpisode', item)}}>

                    <ContainerInfoPost>                
                        <ContainerName>
                            <Name>{item.name}</Name>
                            <TextInfo>{item.episode}</TextInfo>
        
                        </ContainerName>
        
                        <ContainerInfo>
                            <TitleInfo>No ar: {item.air_date} </TitleInfo>
                            <TitleInfo>Ver mais ➢</TitleInfo>
                        </ContainerInfo>
        
                    </ContainerInfoPost>
                </ContainerPost>
            )}
        />
        )}
        
      </Container>
  );
}

export default PostEpisodes;