import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView `
    background-color: #000;
    flex: 1;
`

export const ContainerScroll = styled.ScrollView ``;

export const Title = styled.Text `
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    margin-top: 60px;
    color: #ffe81f;
`;

export const Button = styled.TouchableOpacity `
    background-color: #ffe81f;

    margin: 15px;
    border-radius: 50px;
`;

export const ButtonText = styled.Text `
    font-size: 15px;
    text-align: center;

    margin: 30px;
    color: #000;
`;