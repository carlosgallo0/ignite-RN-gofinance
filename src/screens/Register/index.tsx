import React from 'react'

import {Container, Header, Title, Form, TransactionTypes , Fields } from './styles'

import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

export function Register(){
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

                        <TransactionTypeButton type= 'up' title= "Income"/>
                        <TransactionTypeButton type= 'down' title= "Outcome"/>

                    </TransactionTypes>
                </Fields>
                <Button
                title="Enviar"
                />
                
                
            </Form>
        </Container>
    )
}