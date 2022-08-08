import React from "react";
import { Button } from "react-native";


export default () => {

    function executar() {
        console.warn("Executado!");
    }

    return (
        <>
            <Button
                title="Executar 1"
                onPress={executar}
            />

            <Button
                title="Executar 2"
                onPress={function () {
                    console.warn("Executado 2!")
                }}
            />

            <Button
                title="Executar 3"
                onPress={() => console.warn("Executado 3!")}
            />
        </>
    )
}