import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import axios from 'axios';

import { 
    Wrapper, 
    Title, 
    ContainerScroll, 
    Text, 
    InfosContainer, 
    ContainerScrollHorizontal 
} from '../../styles/film-styles';

import Characters from '../infos/residents';

export default function FilmInfos({ route }) {
    const [filmData,getFilmData] = useState([]);
    const [isLoading, setLoading] = useState(true)

    const url = route.params.url;

    useEffect(() => {
        let mounted = true;

        (
            async () => {
                await axios.get(url)
                .then(res => res.data)
                .then((res => {
                    if (mounted) {
                        getFilmData(res)
                    }
                }))
                .catch(error => console.error(error))
                .finally(() => {
                    if (mounted) {
                        setLoading(false)
                    }
                })
            }
        )()

        return () => mounted = false;
    }, [url])
    
    return (
        <Wrapper>
            {
                isLoading ? <ActivityIndicator size="large" color="#ffe81f" /> :
                <ContainerScroll>
                    <View>
                        <Title> {filmData.title} </Title>
                        <InfosContainer>
                            <View>
                                <Text> Episode: {filmData.episode_id} </Text>
                                <Text> Directed by: {filmData.director} </Text>
                                <Text> Produced by: {filmData.producer} </Text>
                                <Text> Release date: {filmData.release_date} </Text>
                            </View>
                        </InfosContainer>

                        <Title> Synopsis </Title>
                        <Text> {filmData.opening_crawl} </Text>

                        <View>
                            <Title> Film Characters </Title>
                            <InfosContainer>
                                <ContainerScrollHorizontal>
                                    {
                                        filmData.characters.map((result, key) => (
                                            <View key={key}>
                                                <Characters 
                                                    residents={result}
                                                />
                                            </View>
                                        ))
                                    }
                                </ContainerScrollHorizontal>
                            </InfosContainer>
                        </View>
                    </View>
                </ContainerScroll>
            }
        </Wrapper>
    )
}