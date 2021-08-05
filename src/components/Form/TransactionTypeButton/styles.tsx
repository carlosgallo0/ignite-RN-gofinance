import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native'
import {Feather } from '@expo/vector-icons'

import { RFValue} from 'react-native-responsive-fontsize';

export const Container= styled(TouchableOpacity)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({theme})=> theme.colors.text}; 
    padding: 16px 35px; 
`;

export const Icon= styled(Feather)`



`;

export const Title= styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${ (  {theme})=> theme.fonts.regular}
`;
