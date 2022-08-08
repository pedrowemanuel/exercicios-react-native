import React, { useState } from 'react';
import { Text } from 'react-native';
import Filho from './Filho';

import estilo from '../estilo';

export default () => {
    const [aleatorio, setAleatorio] = useState(0);

    function exibirValor(numero) {
        setAleatorio(numero);
    }

    return (
        <>
            <Text style={estilo.txtGrande}>{aleatorio}</Text>
            <Filho
                min={1}
                max={60}
                funcao={exibirValor}
            />
        </>
    )
}