import React from 'react';
import { Text, FlatList } from 'react-native';
import estilo from '../estilo';

import produtos from './produtos'

export default () => {
    return (
        <>
            <Text style={estilo.txtGrande}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={produtos}
                keyExtractor={produto => produto.id}
                renderItem={({item: {id, nome, preco}}) => {
                    return <Text>{id}) {nome} - R$ {preco}</Text>
                }}
            />
        </>
    )
}