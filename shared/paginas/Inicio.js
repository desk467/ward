import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'


export class Inicio extends Component {
    render() {
        return (
            <View style={estilos.containerPrincipal}>

            </View>
        )
    }
}


const estilos = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: 'red'
    }
})