import { createStackNavigator, createSwitchNavigator } from "react-navigation"

// Paginas

import { Carregamento } from './paginas/Carregamento'
import { Inicio } from './paginas/Inicio'
import { Login } from './paginas/Login'

//

 const StackPrincipal = createStackNavigator({
    Inicio,
})

 const StackAutenticacao = createStackNavigator({
    Login,
})

export default createSwitchNavigator(
    {
        Carregamento,
        StackPrincipal,
        StackAutenticacao,
    }, {
        initialRouteName: 'Carregamento'
    }
)