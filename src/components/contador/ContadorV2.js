import React, { useState } from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default () => {
    const [numero, setNumero] = useState(0);

    const incrementar = () => setNumero(numero + 1);
    const decrementar = () => setNumero(numero - 1);


    return (
        <>
            <Text style={estilo.txtGrande}>
                Contador
            </Text>
            <ContadorDisplay numero={numero} />
            <ContadorBotoes incrementar={incrementar} decrementar={decrementar} />
        </>
    )
}