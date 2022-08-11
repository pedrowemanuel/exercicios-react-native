import React from 'react';
import { View, StyleSheet } from 'react-native';
export default ({ cor, lado }) => {
    const ladoQuadrado = lado || 50;
    return (
        <View style={
            {
                height: ladoQuadrado,
                width: ladoQuadrado,
                backgroundColor: cor || "#000",
            }
        }>

        </View>
    )
}