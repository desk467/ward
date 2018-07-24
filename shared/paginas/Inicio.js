import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TemaDefault } from '../temas'

const estilos = StyleSheet.create({
    containerPrincipal: {
        padding: 16,
        backgroundColor: TemaDefault.cores.branco,
        flexDirection: 'column',
    },
    containerTitulo: {
        width: '100%',
        padding: 4,
        paddingLeft: 0,
        margin: 6,
        marginLeft: 0,
    },
    linhaTitulo: {
        width: '12%',
        height: 4,
        backgroundColor: TemaDefault.cores.cinzaEscuro
    },
    titulo: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        marginBottom: 4,
        color: TemaDefault.cores.cinzaEscuro
    },
    botao: {
        padding: 8,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 16,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    botaoTexto: {
        fontSize: 12,
        fontFamily: 'Cabin-Bold',
        marginLeft: 8,
    }
})

const Titulo = ({ valor, estilo }) => {
    estilo = estilo || 'grosso'

    const estilos = {
        fino: {
            texto: {
                fontFamily: 'Montserrat-Regular',
            },
            linha: {
                height: 2,
            }
        },
        grosso: {
            texto: {
                fontFamily: 'Montserrat-Bold',
            },
            linha: {
                height: 4,
            }
        }
    }

    return (
        <View style={estilos.containerTitulo}>
            <Text style={[estilos.titulo, estilos[estilo].texto]}>
                {valor}
            </Text>
            <View style={[estilos.linhaTitulo, , estilos[estilo].linha]} />
        </View>
    )
}

const estiloTarefa = (props) => {
    const prioridadeCor = {
        0: TemaDefault.cores.vermelho,
        1: TemaDefault.cores.amarelo,
        2: TemaDefault.cores.verde,
        3: TemaDefault.cores.azul
    }

    return (
        StyleSheet.create({
            containerTarefa: {
                elevation: 1,
                minHeight: 128,
                backgroundColor: '#FFF',
                borderWidth: 1,
                borderColor: prioridadeCor[props.prioridade] || TemaDefault.cores.cinza,
                borderRadius: 6,
                margin: 2,
            },
            linhaPrioridadeTarefa: {
                position: 'absolute',
                backgroundColor: prioridadeCor[props.prioridade] || TemaDefault.cores.cinza,
                height: '100%',
                width: 8,
            },
            botoes: {
                position: 'absolute',
                bottom: 4,
                right: 4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '60%',
            },
            conteudoTarefa: {
                padding: 12,
                paddingTop: 0,
            }
        })
    )
}

const BotaoTarefa = (props) => (
    <TouchableOpacity>
        <View style={[estilos.botao, { backgroundColor: props.corFundo }]}>
            {props.children}
            <Text style={[estilos.botaoTexto, { color: props.corTexto }]}>{props.texto}</Text>
        </View>
    </TouchableOpacity>
)

const Tarefa = (props) => (
    <View style={estiloTarefa(props).containerTarefa}>
        <View style={estiloTarefa(props).linhaPrioridadeTarefa} />

        <View style={estiloTarefa(props).conteudoTarefa}>
            <Titulo estilo="fino" valor="Fazer coisa X, Y e Z." />

        </View>

        <View style={estiloTarefa(props).botoes}>
            <BotaoTarefa
                corFundo={TemaDefault.cores.verde}
                corTexto={TemaDefault.cores.branco}
                texto="RETOMAR"
            >
                <FontAwesome name="play" size={13} color={TemaDefault.cores.branco} />
            </BotaoTarefa>

            <BotaoTarefa
                corFundo={TemaDefault.cores.vermelho}
                corTexto={TemaDefault.cores.branco}
                texto="PAUSAR"
            >
                <FontAwesome name="pause" size={13} color={TemaDefault.cores.branco} />
            </BotaoTarefa>
        </View>
    </View>
)


export class Inicio extends Component {
    static navigationOptions = {
        title: 'Início'
    }

    state = {
        tarefaAtual: {
            prioridade: 0,
        }
    }

    render() {
        return (
            <ScrollView style={estilos.containerPrincipal}>
                <Titulo valor="tarefa atual" />
                <Tarefa {...this.state.tarefaAtual} />
                <Titulo valor="tarefas disponíveis" />

            </ScrollView>
        )
    }
}

