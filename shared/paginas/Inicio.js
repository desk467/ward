import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


const estilos = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#fff',
        
    }
})

export class Inicio extends Component {
    render() {
        return (
            <View style={estilos.containerPrincipal}>
                <Text>Inicio</Text>
            </View>
        )
    }
}

