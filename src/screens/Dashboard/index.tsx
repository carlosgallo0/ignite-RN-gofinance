import React from 'react';

import { View , Text, StyleSheet} from 'react-native'

import { Container, Header, UserInfo, User, Photo, UserGreeting, UserName } from './styles';

export function Dashboard(){
    return(
        <Container>
            <Header>
                  <UserInfo>
                    <User>
                        <Photo source ={{uri:'https://www.fillmurray.com/300/300'}} />
                          <UserGreeting> Olá</UserGreeting>
                          <UserName>Carlos</UserName>
                      </User>
                  </UserInfo>
                
                </Header>
        </Container>
    )
}