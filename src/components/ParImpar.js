import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

export default ({ numero = 0 }) => {
    return (
        <>
            {numero % 2 === 0
                ? <Text style={estilo.txtGrande}>O número é Par!</Text>
                : <Text style={estilo.txtGrande}>O número é Ímpar!</Text>
            }
        </>
    )
}