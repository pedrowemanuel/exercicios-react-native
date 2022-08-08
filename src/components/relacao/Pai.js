import React from 'react';
import { Text } from 'react-native';
// import estilo from '../estilo';

export default ({children}) => {
    return (
        <>
            <Text>Membros da Família:</Text>
            {children}
        </>
    )
}