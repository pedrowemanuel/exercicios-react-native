import React, { Component } from "react";
import { Button, FlatList, Text, TextInput, View } from 'react-native';

import estilo from "../estilo";
import Numero from "./Numero";

export default class Mega extends Component {

    state = {
        quantidadeNumeros: this.props.quantidadeNumeros,
        numeros: []
    }

    // constructor(props) {
    //     super(props);

    //     this.setQuantidadeNumero = this.setQuantidadeNumero.bind(this);
    // }

    setQuantidadeNumero = (quantidade) => {
        this.setState({ quantidadeNumeros: Number(quantidade) })
    }

    gerarNumerosNaoContido = numeros => {
        const novo = parseInt(Math.random() * 60) + 1;

        return numeros.includes(novo) ? this.gerarNumerosNaoContido(numeros) : novo;
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.quantidadeNumeros).fill()
            .reduce(numeros => [...numeros, this.gerarNumerosNaoContido(numeros)], [])
            .sort((a, b) => a - b)

        this.setState({ numeros })
    }

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         quantidadeNumeros: props.quantidadeNumeros + 10
    //     }
    // }

    exibirNumeros = () => {
        const numeros = this.state.numeros;

        return numeros.map(numero => {
            return <Numero key={numero} numero={numero} />
        })
    }

    render() {
        return (
            <>
                <Text style={estilo.txtGrande}>
                    Gerador de Mega-Sena
                </Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth: 1, borderBottomColor: '#fff', marginBottom: 20}}
                    placeholder="Quantide sde Números:"
                    value={this.quantidadeNumeros}
                    onChangeText={this.setQuantidadeNumero}
                    />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros}
                    />

                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: "wrap",
                        justifyContent: 'center',
                        marginTop: 20,
                    }}
                >
                    {this.exibirNumeros()}
                    {/* <FlatList
                        data={this.state.numeros}
                        keyExtractor={numero => numero}
                        renderItem={({item}) => {
                            return <Numero numero={item} />
                        }}
                    /> */}

                </View>
            </>
        )
    }
}
