import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { Container, Header, UserInfo, User, Photo, UserGreeting, UserName, LogoutButton, Icon, UserWrapper, HighlightCards, Transactions, Title, TransactionList} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard(){
    const data: DataListProps[] = [
    {
        id: '1',
        type: "positive",
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
         name: "Vendas",
         icon: "dollar-sign"
        },
        date: "13/04/2021"
    },
    {
        id:'2',
        type: "negative",
        title: "Pizzaria",
        amount: "R$ 35,00",
        category: {
            name: "Vendas",
            icon: "coffee"
        },
        date: "10/04/2021"
    },
    {
        id: '3',
        type: "negative",
        title: "Aluguel do apartamento",
        amount: "R$ 1.200,00",
        category: {
            name: "compras",
            icon: "shopping-bag"
        },
        date: "03/04/2021"
    }
];

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
                <TransactionList
                    data={data}
                    keyExtractor= {item => item.id}
                    renderItem= {({item}) => <TransactionCard data={item}/>}
                />
            </Transactions>
        </Container>
    )
}