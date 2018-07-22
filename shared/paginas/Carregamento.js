import React, { Component } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'

import { TemaDefault } from '../temas'
import { getSessao } from '../Sessao'

export class Carregamento extends Component {
    componentDidMount() {
        setTimeout(() => {
            getSessao().then(sessao => {
                if (sessao && sessao.token) {
                    this.props.navigation.navigate('Inicio')
                } else {
                    this.props.navigation.navigate('Login')
                }
            })
        }, 500)
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