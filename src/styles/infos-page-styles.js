import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView `
    background-color: #000;
    flex: 1;
`;

export const ContainerScroll = styled.ScrollView ``;

export const ContainerScrollHorizontal = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    },
})) ``;

export const Title = styled.Text `
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    margin-top: 30px;
    color: #ffe81f;
`;

// General Infos
export const Text = styled.Text `
    font-size: 14px;
    color: #fefefe;

    margin: 15px;
`;

export const InfosContainer = styled.View `
    margin-top: 15px;
    border: 1px solid #ffe81f;
    flex-direction: row;
    justify-content: space-between;

    margin: 8px;
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

export const HomeWorldResidents = styled.Text `
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    margin-top: 30px;
    color: #fefefe;

`;
