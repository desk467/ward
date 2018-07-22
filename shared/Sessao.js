import { AsyncStorage } from 'react-native'

export function criarSessao({ id, nome, email, apelido, sessaoHash }) {
    return AsyncStorage.setItem('sessao', JSON.stringify({ id, nome, email, apelido, token: sessaoHash }))
}

export async function getSessao() {
    return JSON.parse(await AsyncStorage.getItem('sessao'))
}