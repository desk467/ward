import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export class Login extends Component {
    render() {
        return (
            <View style={estilos.containerPrincipal}>
                <Text>Login</Text>
            </View>
        )
    }
}


const estilos = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
    }
})