import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

export default ({x, y}) => {
    return (
        <>
            <Text style={estilo.txtGrande}>{x}</Text>
            <Text style={estilo.txtGrande}>{y}</Text>
        </>
    )
}