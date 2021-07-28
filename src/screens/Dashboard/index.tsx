import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

import { Container, Header, UserInfo, User, Photo, UserGreeting, UserName, LogoutButton, Icon, UserWrapper, HighlightCards, Transactions, Title} from './styles';


export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                  <UserInfo>
                    <User>
                        <Photo source ={{uri:'https://www.fillmurray.com/300/300'}} />
                          <UserGreeting> Olá</UserGreeting>
                          <UserName>Carlos</UserName>
                      </User>
                  </UserInfo>
                  {/* <LogoutButton onPress={signOut}> */}
                    <Icon name="power" />
                </UserWrapper>
                </Header>
            
            <HighlightCards >
                <HighlightCard type="up" title= "Entradas" amount="R$17.400,00"  lastTransaction = "Última entrada dia 13 de abril"/>
                <HighlightCard type="down" title= "Saídas" amount="R$1.259,00"  lastTransaction = "Última entrada dia 03 de abril"/>
                <HighlightCard type="total" title= "Total" amount="R$16.141,00"  lastTransaction = "Última entrada dia 13 de abril"/>
            </HighlightCards>
            <Transactions>
                <Title>Listagem</Title>
                <TransactionCard>
                </TransactionCard>
            </Transactions>
        </Container>
    )
}