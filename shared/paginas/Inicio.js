import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


const estilos = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
    }
})

export class Inicio extends Component {
    static navigationOptions = {
        title: 'Início'
    }

    render() {
        return (
            <View style={estilos.containerPrincipal}>
            </View>
        )
    }
}

