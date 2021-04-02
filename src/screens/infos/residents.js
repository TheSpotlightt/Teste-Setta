import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';

import { ButtonText, Button  } from '../../styles/infos-page-styles';


export default function Residents(props) {
    const navigation = useNavigation(); 

    const [residents, getResidents] = useState('');
    const [isLoading, setLoading] = useState(true);

    const residentsChars = props.residents;

    useEffect(() => {
        let mounted = true;

        (
            async () => {
                await axios.get(residentsChars)
                .then(res => res.data)
                .then((res => {
                    if (mounted) {
                        getResidents(res)
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
    }, [residentsChars]);

    return (
        <View>
            {
                isLoading ? <ActivityIndicator size="large" color="#ffe81f" /> :
                <Button onPress={() => navigation.push('Infos', { url: residents.url, name: residents.name })}>
                    <ButtonText> {residents.name} </ButtonText>
                </Button>
            }
        </View>
    )
}