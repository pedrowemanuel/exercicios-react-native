import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import estilo from '../estilo';

export default ({ numero }) => {
    return (
        <View style={style.Display}>
            <Text style={[estilo.txtGrande, style.DisplayText]}>
                { numero }
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: "#000",
        padding: 20,
        marginTop: 20,
        width: 300,
        alignItems: 'center',
        borderRadius: 10,
    },
    DisplayText: {
        color: "#fff",
    }
})