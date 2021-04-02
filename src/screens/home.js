import React, { useState, useEffect } from 'react';

import { AppState, View, ActivityIndicator } from 'react-native';

import axios from 'axios';

import {
    Wrapper,
    Title,
    Button,
    ButtonText,
    ContainerScroll
} from '../styles/home-styles';

export default function Home(props) {
    const [data, getData] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        let mounted = true;
        (
            async () => {
                await axios.get('https://swapi.dev/api/people/')
                .then(res => res.data)
                .then((res => {
                    if (mounted) {
                        getData(res)
                    }
                }))
                .catch(error => console.error(error))
                .finally(() => {
                    if (mounted) {
                        setLoading(false)
                    }
                })
            }
        )();

        return () => mounted = false;
    }, []);

    useEffect(() => {
        if (AppState.currentState === 'active') {
            setTimeout(() => {
                props.navigation.navigate('modal')
            }, 45000)
        }
    }, []);

    return (
        <Wrapper>
            <Title testID="title"> Star Wars Characters </Title>
            {
                <ContainerScroll>
                    {
                        isLoading ? <ActivityIndicator size="large" color="#ffe81f" /> :
                        
                        data.results.map((result, key) => (
                            <View key={key}>
                                <Button onPress={() => props.navigation.navigate('Infos', { url: result.url, name: result.name })} testID="button">
                                    <ButtonText testID="text"> {result.name} </ButtonText>
                                </Button>
                            </View>
                        ))
                    }
                    
                </ContainerScroll>
            }
        </Wrapper>
    );
}

