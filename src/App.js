import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

// import Primeiro from './components/Primeiro';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import ContadorV2 from './components/contador/ContadorV2';
// import Diferenciar from './components/Diferenciar';
// import ParImpar from './components/ParImpar';
// import Pai from './components/relacao/Pai';
// import Filho from './components/relacao/Filho';
// import UsuarioLogado from './components/UsuarioLogado';
// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2';
// import DigiteSeuNome from './components/DigiteSeuNome';
// import FlexBoxV1 from './components/layout/FlexBoxV1';
// import FlexBoxV2 from './components/layout/FlexBoxV2';
// import FlexBoxV3 from './components/layout/FlexBoxV3';
// import FlexBoxV4 from './components/layout/FlexBoxV4';
import Mega from './components/mega/Mega';

function App() {
    return (
        <SafeAreaView style={style.app}>
            {/* <Primeiro /> */}
            {/* <Botao /> */}
            {/* <Contador inicial={2} passo={2} />
            <Contador /> */}
            {/* <Pai /> */}
            {/* <ContadorV2 /> */}
            {/* <Diferenciar /> */}
            {/* <ParImpar /> */}
            {/* <ParImpar numero={3} /> */}
            {/* <Pai>
                <Filho nome="Julio" sobrenome="Rodrigues" />
                <Filho nome="Francisca" sobrenome="Sampaio" />
            </Pai>
            <Pai>
                <Filho nome="Maria" sobrenome="Costa" />
                <Filho nome="Mario" sobrenome="Arruda" />
                <Filho nome="João" sobrenome="Silva" />
            </Pai> */}
            {/* <UsuarioLogado usuario={{ nome: "Pedro", email: "pedro@gmail.com"}} />
            <UsuarioLogado usuario={{ nome: "Maria" }} />
            <UsuarioLogado usuario={{}} /> */}
            {/* <ListaProdutos /> */}
            {/* <ListaProdutosV2 /> */}
            {/* <DigiteSeuNome /> */}
            {/* <FlexBoxV1 /> */}
            {/* <FlexBoxV2 /> */}
            {/* <FlexBoxV3 /> */}
            {/* <FlexBoxV4 /> */}
            <Mega quantidadeNumeros={7} />
        </SafeAreaView>
    )
}

export default App

const style = StyleSheet.create({
    app: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
})