import React from 'react';
import { StyleSheet, View } from 'react-native';
import Quadrado from './Quadrado';


export default () => {
    return (
        <View style={style.FlexV3}>
            <Quadrado cor="#ff801a" lado={20} />
            <Quadrado cor="#50d1f6" lado={30} />
            <Quadrado cor="#dd22c1" lado={40} />
            <Quadrado cor="#8312ed" lado={50} />
            <Quadrado cor="#36c9a7" lado={60} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        height: 350,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // alignItems: 'stretch',
        alignItems: 'baseline',
        width: "100%",
        backgroundColor: "#fff"
    }
})