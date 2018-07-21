import React, { Component } from 'react'
import { View, TextInput, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { TemaDefault } from '../temas';


const estilos = StyleSheet.create({
    logo: {
        backgroundColor: TemaDefault.cores.cinzaClaro,
        width: '100%',
        flex: 1,
    },
    containerPrincipal: {
        flex: 1,
        padding: 16,
        backgroundColor: TemaDefault.cores.branco,
        flexDirection: 'column',
    },
    containerFilho: {
        marginTop: 8,
        marginBottom: 8,
    },
    containerForm: {
        flex: 2,
        marginTop: 12,
        alignSelf: 'center',
        width: '82%',
    },
    containerInput: {
        margin: 4,
        padding: 6,
        flexDirection: 'row',
    },
    inputFilho: {
        width: '100%'
    },
    containerInputTexto: {
        borderRadius: 3,
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: TemaDefault.cores.cinzaClaro
    },
    botao: {
        marginTop: 24,
        padding: 8,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 3,
        borderBottomWidth: 2,
        borderBottomColor: TemaDefault.cores.vermelhoEscuro,
        backgroundColor: TemaDefault.cores.vermelho,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
    },
    botaoTexto: {
        color: TemaDefault.cores.branco
    },
    footer: {
        backgroundColor: TemaDefault.cores.branco,
        bottom: 0,
        left: 0,
        width: '100%',
        padding: 8,
        alignItems: 'flex-end',
    },
    footerTexto: {
        color: TemaDefault.cores.preto,
        fontWeight: '300',
        fontSize: 12,
    }
})

export class Login extends Component {

    static navigationOptions = {
        title: 'Entrar'
    }

    renderLogo() {
        return (
            <View style={estilos.logo}>

            </View>
        )
    }

    renderFooter() {
        return (
            <View style={estilos.footer}>
                <Text style={estilos.footerTexto}>{"ward. feito com amor e carinho :)"}</Text>
            </View>
        )
    }

    renderFormLogin() {
        return (
            <View style={estilos.containerForm}>
                <View style={[estilos.containerInput, estilos.containerInputTexto]}>
                    <TextInput
                        style={estilos.inputFilho}
                        placeholder="e-mail"
                        keyboardType="email-address"
                    />
                </View>
                <View style={[estilos.containerInput, estilos.containerInputTexto]}>
                    <TextInput
                        style={estilos.inputFilho}
                        placeholder="senha"
                        secureTextEntry={true}
                    />
                </View>
                <TouchableNativeFeedback>
                    <View style={[estilos.containerInput, estilos.botao]}>
                        <Text style={estilos.botaoTexto}>
                            Entrar
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    render() {
        return (
            <>
                <View style={estilos.containerPrincipal}>
                    {this.renderLogo.bind(this)()}
                    {this.renderFormLogin.bind(this)()}
                </View>
                {this.renderFooter.bind(this)()}
            </>
        )
    }
}