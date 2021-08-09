import React, {useState} from 'react'

import {Container, Header, Title, Form, TransactionTypes , Fields } from './styles'

import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelect } from '../../components/Form/CategorySelect'


export function Register(){
    const [transactionType, setTransactionType] = useState('')

    function handleTransactionsTypeSelector(type: 'up'| 'down'){
        setTransactionType(type);
        console.log('estado: ', transactionType)
    }

    return (
        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>

            <Form>
                <Fields>

                    <Input
                    placeholder="Nome"
                    />
                    <Input
                    placeholder="Preço"/>

                    <TransactionTypes>

                        <TransactionTypeButton 
                            type= 'up' 
                            title= 'Income'
                            onPress = {() => handleTransactionsTypeSelector('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            type= 'down'
                            title= 'Outcome'
                            onPress = {() => handleTransactionsTypeSelector('down')}
                            isActive={transactionType === 'down'}
                            />

                    </TransactionTypes>
        
                    <CategorySelect
                        title='Categoria'/>
                </Fields>
                <Button
                title="Enviar"
                />
                
                
            </Form>
        </Container>
    )
}