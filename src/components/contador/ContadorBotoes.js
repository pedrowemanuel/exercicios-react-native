import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default ({incrementar, decrementar}) => {
    return (
        <View style={style.botoes}>
            <Button title='+' onPress={incrementar} />
            <Button title='-' onPress={decrementar} />
        </View>
    )
}

const style = StyleSheet.create({
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 60,
        marginTop: 20,
    }
})