import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

import { ButtonText, Button } from '../../styles/infos-page-styles';


export default function StarShips(props) {
    const navigation = useNavigation(); 

    const [starShipsData, getStarShipsData] = useState('');
    const [isLoading, setLoading] = useState(true)

    const starShips = props.starShips;

    useEffect(() => {
        let mounted = true;

        (
            async () => {
                await axios.get(starShips)
                .then(res => res.data)
                .then((res => {
                    if (mounted) {
                        getStarShipsData(res)
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
    }, [starShips]);


    
    return (
        <View>
            {
                isLoading ? <ActivityIndicator size="large" color="#ffe81f" /> :
                <Button onPress={() => navigation.push('StarShipsInfo', {url: starShipsData.url})}>
                    <ButtonText> {starShipsData.name} </ButtonText>
                </Button>
            }
        </View>
    )
}
