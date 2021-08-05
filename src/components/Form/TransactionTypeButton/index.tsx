import React from 'react'
import {TouchableOpacityProps} from 'react-native'
import {Container, Title, Icon} from './styles'

interface Props extends TouchableOpacityProps{
    title: string;
    type: 'up' | 'down';
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-cir cle',
}
export function TransactionTypeButton({
    title, 
    type,   
    ...rest
}: Props){
  return(
    <Container {...rest}>
        <Icon name={icon[type]}/>
        <Title>
            {title}
        </Title>

    
    </Container>
  )
}