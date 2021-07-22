import styled from  'styled-components/native'

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    /* background-color:${(props) => props.theme.colors.secondary_light} */
    background-color:${({theme}) => theme.colors.primary}
`;