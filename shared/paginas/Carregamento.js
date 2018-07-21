import React, { Component } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

import { TemaDefault } from '../temas'


export class Carregamento extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login')

        }, 1000)
    }

    render() {
        return (
            <View style={estilos.containerPrincipal}>
                <ActivityIndicator size="large" color={TemaDefault.cores.branco} />
            </View>
        )
    }
}


const estilos = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: TemaDefault.cores.azul,
        alignItems: 'center',
        justifyContent: 'center'
    }
})