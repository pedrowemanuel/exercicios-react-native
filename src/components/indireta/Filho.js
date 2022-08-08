import React from 'react';
import { Button } from 'react-native';

export default ({min, max, funcao}) => {
    function gerarNumero(min, max) {
        const fator = max - min + 1;
        return parseInt(Math.random() * fator) + min
    }

    return (
        <Button
            title='Executar'
            onPress={() => {
                const aleatorio = gerarNumero(min, max)
                funcao(aleatorio)
            }}
        />
    )
}