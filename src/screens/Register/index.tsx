import React, {useState} from 'react'
import {Modal} from 'react-native'
import {useForm} from 'react-hook-form'

import {
    Container,
    Header,
    Title,
    Form, 
    TransactionTypes , 
    Fields 
} from './styles'

import { Input } from '../../components/Form/Input'
import { InputForm } from '../../components/Form/InputForm'

import { Button } from '../../components/Form/Button'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'

import { CategorySelect } from '../CategorySelect'
interface FormData {
    name: string;
    amount:  string;
}


export function Register(){
    const [transactionType, setTransactionType] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState<boolean>(false)
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    })

    const {
        control, 
        handleSubmit,
    } = useForm();

    function handleRegister(form: FormData){
        const data = {
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
          }
      
          console.log(data);
        
    }
    
    function handleTransactionsTypeSelector(type: 'up'| 'down'){
        setTransactionType(type);
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
                    <InputForm
                    name="name"
                    control={control}
                    placeholder="Nome"
                    />
                    <InputForm
                    name="amount"
                    control={control}
                    placeholder="Preço"
                    />

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
                onPress={handleSubmit(handleRegister)}
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