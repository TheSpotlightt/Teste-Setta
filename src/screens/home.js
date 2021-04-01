import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

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
    const navigation = useNavigation(); 

    const [data, getData] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        (
            async () => {
                await axios.get(`https://swapi.dev/api/people/`)
                .then(res => res.data)
                .then((res => getData(res)))
                .catch(error => console.error(error))
                .finally(() => setLoading(false))
            }
        )();
    }, []);

    useEffect(() => {
        if (AppState.currentState === 'active') {
            setTimeout(() => {
                navigation.navigate('modal')
            }, 45000)
        }
    }, []);

    return (
        <Wrapper>
            {
                <>
                    <Title> Star Wars Characters </Title>
                    <ContainerScroll>
                        {
                            isLoading ? <ActivityIndicator size="large" color="#ffe81f" /> :
                            
                            
                            data.results.map((result, key) => (
                                <View key={key}>
                                    <Button onPress={() => props.navigation.navigate('Infos', { url: result.url, name: result.name })}>
                                        <ButtonText> {result.name} </ButtonText>
                                    </Button>
                                </View>
                            ))
                        }
                        
                    </ContainerScroll>
                </>
            }
        </Wrapper>
    );
}

