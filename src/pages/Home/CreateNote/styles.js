import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.background};
`;

export const ContainerHeader = styled.View`
    margin-bottom: 12px;
    height: 60px;
    width: 100%;
    padding: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerNotes = styled.View`
    height: 90%;
    width: 100%;
    padding: 10px;
    align-items: center;
`;

export const CardNote = styled.View`
    margin-bottom: 12px;
    width: 340px;
    padding: 10px;
    background-color: ${props => props.theme.primary};
    flex-direction: row;
    border-radius: 4px;
`;

export const CardNoteContent = styled.View`
    width: 80%;
    align-items: start;
    flex-direction: column;
`;

export const CardNoteAction = styled.View`
    width: 20%;
    justify-content: center;
    align-items: center;
`;

export const PageTitle = styled.Text`
    margin-bottom: 5px;
    font-weight: bold;
    font-size: 16px;
    color: #C4C4CC;
`;

export const CardDescription = styled.Text`
    font-size: 14px;
    color: ${props => props.theme.secondary};
`;