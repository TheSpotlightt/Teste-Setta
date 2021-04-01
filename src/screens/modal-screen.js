import React, { useState, useEffect} from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
    Wrapper, 
    Title, 
    Button,
    ButtonText, 
    Container, 
    ButtonContainer 
} from '../styles/modal-styles';

export default function ModalScreen({ navigation }) {
    const [paymentChoice, getPaymentChoice] = useState('');

    // Saving the choice in the localStorage
    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('userChoice', value)
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        (
            async () => {
                try {
                    const value = await AsyncStorage.getItem('userChoice')
                    if(value !== null) {
                        return getPaymentChoice(value)
                    }
                } catch(e) {
                    console.log(e)
                }
            }
        )()
    }, [])

    const handleButtonValue = (choice) => {
        storeData(choice)
    }

    console.log(paymentChoice)

    return (
        <Wrapper>
            <Container>
                <View>
                    <Title>
                        Pagamento
                    </Title>

                    <ButtonContainer>
                        <Button onPress={(e) => {navigation.goBack(); handleButtonValue('pagar')}}>
                            <ButtonText> Pagar </ButtonText>
                        </Button>

                        <Button  onPress={() => {navigation.goBack(), handleButtonValue('mais tarde')}}>
                            <ButtonText> Mais Tarde </ButtonText>
                        </Button>
                    </ButtonContainer>
                </View>
            </Container>
        </Wrapper>
    );
}
