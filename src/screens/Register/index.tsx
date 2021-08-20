import React, {useState} from 'react'
import {Modal} from 'react-native'

import {Container, Header, Title, Form, TransactionTypes , Fields } from './styles'

import { Input } from '../../components/Form/Input'
import { Button } from '../../components/Form/Button'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'

import { CategorySelect } from '../CategorySelect'



export function Register(){
    const [transactionType, setTransactionType] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false)
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })
    
    function handleTransactionsTypeSelector(type: 'up'| 'down'){
        setTransactionType(type);
        console.log('estado: ', transactionType)
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false)
    }
    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true)
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
        
                    <CategorySelectButton
                        title={category.name}
                        onPress={handleOpenSelectCategoryModal}/>
                </Fields>
                <Button
                title="Enviar"
                />
                <Modal
                visible={categoryModalOpen}>
                    <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>
                
               
            </Form>
        </Container>
    )
}