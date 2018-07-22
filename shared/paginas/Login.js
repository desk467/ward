import React, { Component } from 'react'
import { View, TextInput, Text, ActivityIndicator, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'
import { TemaDefault } from '../temas'

import executarServico from '../services/executarServico'
import { Chord } from '../services/Chord'

import { criarSessao } from '../Sessao'


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

    state = {
        email: '',
        senha: '',
        carregando: false,
    }

    onInputChanged(campo) {
        return (valor) => {
            this.setState({ [campo]: valor })
        }
    }

    onEntrarPressed() {
        this.setState({ carregando: true })

        executarServico(Chord.logar(this.state)).then(response => criarSessao(response.data)).then(() => {
            this.setState({ carregando: false })
            this.props.navigation.navigate('Inicio')
        }).catch(err => {
            this.setState({ carregando: false })
        })
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

    renderBotaoEntrar() {
        const Touchable = Platform.select({ ios: TouchableOpacity, android: TouchableNativeFeedback })

        if (this.state.carregando) {
            return (
                <View style={[estilos.containerInput, estilos.botao]}>
                    <ActivityIndicator
                        size="small"
                        color={TemaDefault.cores.branco}
                    />
                </View>
            )
        } else {
            return (
                <Touchable onPress={this.onEntrarPressed.bind(this)}>
                    <View style={[estilos.containerInput, estilos.botao]}>
                        <Text style={estilos.botaoTexto}>Entrar</Text>
                    </View>
                </Touchable>
            )
        }
    }

    renderFormLogin() {
        return (
            <View style={estilos.containerForm}>
                <View style={[estilos.containerInput, estilos.containerInputTexto]}>
                    <TextInput
                        style={estilos.inputFilho}
                        placeholder="e-mail"
                        keyboardType="email-address"
                        value={this.state.email}
                        onChangeText={this.onInputChanged.bind(this)('email')}
                    />
                </View>
                <View style={[estilos.containerInput, estilos.containerInputTexto]}>
                    <TextInput
                        style={estilos.inputFilho}
                        placeholder="senha"
                        secureTextEntry={true}
                        value={this.state.senha}
                        onChangeText={this.onInputChanged.bind(this)('senha')}
                    />
                </View>
                {this.renderBotaoEntrar.bind(this)()}
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