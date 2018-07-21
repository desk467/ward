import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'


export class Carregamento extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login')

        }, 1000)
    }

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
        backgroundColor: '#eee'
    }
})