import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

export default ({ nome, sobrenome }) => {
    return (
        <Text style={estilo.txtGrande}>{nome} {sobrenome}</Text>
    )
}