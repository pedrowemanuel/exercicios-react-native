import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';
import If from './If';

export default (props) => {
    const usuario = props.usuario || {}
    return (
        <> 
            <If teste={usuario && usuario.nome && usuario.email}>
                <Text style={estilo.txtGrande}>Usuário logado:</Text>
                <Text style={estilo.txtGrande}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </>
    )
}