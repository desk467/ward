import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export class Inicio extends Component {
    render() {
        return (
            <View style={estilos.containerPrincipal}>
                <Text>Inicio</Text>
            </View>
        )
    }
}


const estilos = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
    }
})