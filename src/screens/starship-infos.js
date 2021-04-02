import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import axios from 'axios';

import { Wrapper, Text, InfosContainer } from '../styles/starship-infos-styles';

export default function StarShipsInfo({ route, navigation }) {
    const [starShipInfos, getStarShipInfos] = useState('');
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
                        getStarShipInfos(res)
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
    }, [url]);

    return (
        <Wrapper>
            {
                isLoading ? <ActivityIndicator size="large" color="#ffe81f" /> :
                <InfosContainer>
                    <View>
                        <Text> Name: {starShipInfos.name} </Text>
                        <Text> Model: {starShipInfos.model} </Text>
                        <Text> Manufacturer: {starShipInfos.manufacturer} </Text>
                        <Text> Price: {starShipInfos.cost_in_credits} </Text>
                    </View>

                    <View>
                        <Text> Length: {starShipInfos.length} </Text>
                        <Text> Max Atmosphering Speed: {starShipInfos.max_atmosphering_speed} </Text>
                        <Text> StarShip Class: {starShipInfos.starship_class} </Text>
                    </View>
                </InfosContainer>
            }
        </Wrapper>
    )
}