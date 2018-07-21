import React, { Component } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'


export class Carregamento extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login')

        }, 1500)
    }

    render() {
        return (
            <View style={estilos.containerPrincipal}>
                <ActivityIndicator size="large" color="#20bcefff" />
            </View>
        )
    }
}


const estilos = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center'
    }
})