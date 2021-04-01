import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import axios from 'axios';

import Residents from './residents';

import { 
    Text, 
    InfosContainer, 
    HomeWorldResidents, 
    ContainerScrollHorizontal 
} from '../../styles/infos-page-styles';

export default function HomeWorld(props) {
    const [homeWorldData, getHomeWorldData] = useState('');
    const [isLoading, setLoading] = useState(true);

    
    const homeWorld = props.homeWorld;

    useEffect(() => {
        (
            async () => {
                await axios.get(homeWorld)
                .then(res => res.data)
                .then((res => getHomeWorldData(res)))
                .catch(error => console.error(error))
                .finally(() => setLoading(false))
            }
        )()

    }, [homeWorld]);

    return (
        <View>
            {
                isLoading ? <ActivityIndicator size="large" color="#ffe81f" /> : 
                <View>
                    <InfosContainer>
                        <View>
                            <Text> Name: {homeWorldData.name} </Text>
                            <Text> Rotation Period: {homeWorldData.rotation_period} </Text>
                            <Text> Orbital Period: {homeWorldData.orbital_period} </Text>
                            <Text> Diameter: {homeWorldData.diameter} </Text>
                        </View>

                        <View>
                            <Text> Climate: {homeWorldData.climate} </Text>
                            <Text> Gravity: {homeWorldData.gravity} </Text>
                            <Text> Population: {homeWorldData.population} </Text>
                        </View>
                    </InfosContainer>

                    <View>
                        <HomeWorldResidents> Homeworld Residents </HomeWorldResidents>
                            <InfosContainer>
                                <ContainerScrollHorizontal>
                                        {
                                            homeWorldData.residents.map((result, key) => (
                                                <View key={key}>
                                                    <Residents 
                                                        residents={result}
                                                    />
                                                </View>
                                            ))
                                        }
                                </ContainerScrollHorizontal>
                            </InfosContainer>
                    </View>
                </View>
            }
        </View>
    )
}