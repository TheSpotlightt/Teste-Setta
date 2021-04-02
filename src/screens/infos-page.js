import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import axios from 'axios';

import GeneralInfos from './infos/general';
import StarShips from './infos/starShips';
import HomeWorld from './infos/homeworld';

import { Wrapper, Title, ContainerScroll, Text, InfosContainer } from '../styles/infos-page-styles';

export default function Infos({ route, navigation }) {
    const [characterData, getCharacterData] = useState([]);
    const [isLoading, setLoading] = useState(true)

    const url = route.params.url;
    const charName = route.params.name;

    useEffect(() => {
        let mounted = true;

        (
            async () => {
                await axios.get(url)
                .then(res => res.data)
                .then((res => {
                    if (mounted) {
                        getCharacterData(res)
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
    }, [url])

    return (
        <Wrapper>
            <ContainerScroll>
                <Title>  {charName} </Title>
                {
                    isLoading ? <ActivityIndicator size="large" color="#ffe81f" /> :
                    <>
                        <GeneralInfos 
                            name={characterData.name}
                            gender={characterData.gender}
                            birth_year={characterData.birth_year}
                            height={characterData.height}
                            hairColor={characterData.hair_color}
                            skinColor={characterData.skin_color}
                            eyeColor={characterData.eye_color}
                        />

                        <View>
                            <Title> Star Ships </Title>
                            <InfosContainer>
                                {
                                    characterData.starships.length === 0 ? 
                                    <Text> No Star Ships </Text> :
                                    characterData.starships.map((result, key) => (
                                        <View key={key}>
                                            <StarShips
                                                starShips={result}
                                            />
                                        </View>
                                    ))
                                }
                            </InfosContainer>
                        </View>

                        <View>
                            <Title> Homeworld </Title>
                            <HomeWorld 
                                homeWorld={characterData.homeworld}
                            />
                        </View>
                    </>
                }
            </ContainerScroll>
        </Wrapper> 
    )
}