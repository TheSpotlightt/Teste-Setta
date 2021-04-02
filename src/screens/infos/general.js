import React from 'react';
import { View } from 'react-native';

import { Text, InfosContainer } from '../../styles/infos-page-styles';

export default function GeneralInfos(props) {
    const gender = props.gender.charAt(0).toUpperCase() + props.gender.slice(1);
    const hairColor = props.hairColor.charAt(0).toUpperCase() + props.hairColor.slice(1);
    const skinColor = props.skinColor.charAt(0).toUpperCase() + props.skinColor.slice(1);
    const eyeColor = props.eyeColor.charAt(0).toUpperCase() + props.eyeColor.slice(1);

    return (
        <View>
            <InfosContainer>
                <View>
                    <Text testID="infos">Gender: {gender}</Text>
                    <Text testID="infos"> Birth Year: {props.birth_year} </Text>
                    <Text testID="infos"> Height: {props.height} </Text>
                </View>

                <View>
                    <Text testID="infos"> Hair Color: {hairColor} </Text>
                    <Text testID="infos"> Skin Color: {skinColor} </Text>
                    <Text testID="infos"> Eye Color: {eyeColor} </Text>
                </View>
            </InfosContainer>
        </View>
    )
}