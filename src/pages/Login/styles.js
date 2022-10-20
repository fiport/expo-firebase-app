import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.background};
`;

export const ContainerHeader = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
`;

export const TextPrimary = styled.Text`
    font-size: 32px;
    font-weight: bold;
    color: #FFF;
    margin-bottom: 12px;
`;

export const TextSecondary = styled.Text`
    font-size: 16px;
    color: ${props => props.theme.secondary};
`;

export const ContainerForm = styled.View`
    align-items: center;
    justify-content: center;
    max-width: 90%;
`;

export const Input = styled.TextInput`
    margin: 5px;
    height: 48px;
    min-width: 100%;
    border-radius: 4px;
    padding: 10px;
    color: ${props => props.theme.secondary};
    background-color: ${props => props.theme.primary};
`;

export const ButtonLogin = styled.TouchableOpacity`
    margin-top: 32px;
    margin-bottom: 12px;
    height: 48px;
    min-width: 100%;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.button};
`;

export const ButtonCreate = styled.TouchableOpacity`
    height: 48px;
    width: 360px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.secondary};
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
`;
