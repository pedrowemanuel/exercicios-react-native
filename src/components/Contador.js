import React, { useState } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native'

import estilo from './estilo';

export default ({inicial=0, passo=1}) => {
    // let numero = inicial;
    const [numero, setNumero] = useState(inicial);

    const incrementar = () => setNumero(numero + passo);
    const decrementar = () => setNumero(numero - passo);

    return (
        <>
            <View style={style.contador}>
                <Button title="+" onPress={incrementar} />
                <Text style={estilo.txtGrande}>{numero}</Text>
                <Button title="-" onPress={decrementar} />
            </View>
        </>
    );
}

const style = StyleSheet.create({
    contador: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "50%"
    },
})