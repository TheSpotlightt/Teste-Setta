import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

import {
    Wrapper,
    Title,
    Button,
    ButtonText,
    ContainerScroll
} from '../../styles/home-styles';

export default function Films() {
    const [films, getFilms] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const navigation = useNavigation(); 


    useEffect(() => {
        let mounted = true;

        (
            async () => {
                await axios.get('https://swapi.dev/api/films/')
                .then(res => res.data)
                .then(res => {
                    if (mounted) {
                        getFilms(res)
                    }
                })
                .catch(error => console.log(error))
                .finally(() => {
                    if (mounted) {
                        setLoading(false)
                    }
                })
            }
        )()

        return () => mounted = false;
    }, []);

    return (
        <Wrapper>
            <Title> Star Wars Films </Title>
            <ContainerScroll>
                {
                    isLoading ? <ActivityIndicator size="large" color="#ffe81f" /> :
                        films.results.map((result, key) => (
                            <View key={key}>
                                <Button onPress={() => navigation.navigate('FilmInfos', { url: result.url })}>
                                    <ButtonText>
                                        {result.title}
                                    </ButtonText>
                                </Button>
                            </View>
                        ))
                }
            </ContainerScroll>
        </Wrapper>
    )
}