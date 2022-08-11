import React, { Component } from "react";
import { Text, TextInput } from 'react-native';

import estilo from "../estilo";

export default class Mega extends Component {

    state = {
        quantidadeNumeros: this.props.quantidadeNumeros
    }

    // constructor(props) {
    //     super(props);

    //     this.setQuantideNumero = this.setQuantideNumero.bind(this);
    // }

    setQuantideNumero = (quantidade) => {
        this.setState({ quantidadeNumeros: quantidade })
    }

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         quantidadeNumeros: props.quantidadeNumeros + 10
    //     }
    // }

    render() {
        return (
            <>
                <Text style={estilo.txtGrande}>
                    Gerador de Mega-Sena { this.state.quantidadeNumeros }
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1, borderBottomColor: '#fff'}}
                    placeholder="Quantide de Números:"
                    value={this.quantidadeNumeros}
                    onChangeText={this.setQuantideNumero}
                    />
            </>
        )
    }
}
