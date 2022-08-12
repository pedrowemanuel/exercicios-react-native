import React, { Component } from  'react';
import { View, Text, StyleSheet } from 'react-native';
import estilo from '../estilo';

export default class Numero extends Component {
    render() {
        return (
            <View style={style.Container}>
                <Text
                    style={[estilo.txtGrande, style.Numero]}
                >
                    {this.props.numero}
                </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    Container: {
        backgroundColor: '#000',
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Numero: {
        color: '#fff'
    }
})