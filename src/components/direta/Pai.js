import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

import Filho from './Filho';

export default () => {
    let x = 13;
    let y = 23;

    return (
        <>
            <Filho x={x} y={y} />
            <Filho x={x + 223} y={y + 343} />
        </>
    )
}