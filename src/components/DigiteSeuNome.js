import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import estilo from './estilo';

// a interface só muda se o estado mudar em componentes controlados
export default () => {
    const [nome, setNome] = useState('Teste')

    return (
        <View>
            <Text>{nome}</Text>
            <TextInput
                placeholder='Digite seu nome: '
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    )
}