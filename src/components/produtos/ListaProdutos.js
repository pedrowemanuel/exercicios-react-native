import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

import produtos from './produtos'

export default () => {
    function lista() {
        return produtos.map(({id, nome, preco}) => {
            return <Text key={id}>{id}) {nome} tem R$ {preco}</Text>
        })
    }
    return (
        <>
            <Text style={estilo.txtGrande}>
                Lista de Produtos
            </Text>
            {lista()}
        </>
    )
}