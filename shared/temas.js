// Paleta de cores da aplicação,
// baseada na paleta da Landing Page do Chord.

const TemaDefaultCores = {
    azul: '#2680EB',
    azulEscuro: '#2272D1',
    branco: '#FAFAFA',
    cinzaClaro: '#F5F5F5',
    cinza: '#E8E8E8',
    cinzaEscuro: '#8E8E8E',
    preto: '#323232',
    vermelho: '#FF3859',
    vermelhoEscuro: '#E53250',
    verde: '#41C583',
    verdeEscuro: '#39AB72'
}

export const TemaDefault = {
    cores: TemaDefaultCores,

    navigationOptions: {
        headerStyle: {
            backgroundColor: TemaDefaultCores.azul,
            borderBottomColor: TemaDefaultCores.azulEscuro,
            borderBottomWidth: 2,
            elevation: 0,
        },
        headerTitleStyle: {
            fontWeight: '300',
            fontSize: 18,
        },
        headerTintColor: TemaDefaultCores.branco
    }
}