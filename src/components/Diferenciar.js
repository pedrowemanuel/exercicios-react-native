import React from 'react';
import { Text, Platform } from 'react-native';
import estilo from './estilo';

export default () => {
    let plataformaOS;
    if(Platform.OS == 'android') {
        plataformaOS = 'Android';
    } else if(Platform.OS == 'ios') {
        plataformaOS = 'Android';
    } else {
        plataformaOS = 'Eita!';
    }

    return (
        <Text style={estilo.txtGrande}>{ plataformaOS }</Text>
    )
}