import { createStackNavigator, createSwitchNavigator } from "react-navigation"

/* Paginas */

import { Carregamento } from './paginas/Carregamento'
import { Inicio } from './paginas/Inicio'
import { Login } from './paginas/Login'

/***************************** */

const EstiloHeader = {
	backgroundColor: '#fff',
	borderBottomColor: '#eee',
	borderBottomWidth: 0.6,
	elevation: 0,

}


 const StackPrincipal = createStackNavigator(
 	{
    	Inicio,
	},
	{
		navigationOptions: {
			headerStyle: EstiloHeader,
		}
	}
)

 const StackAutenticacao = createStackNavigator(
 	{
    	Login,
	}, {
		navigationOptions: {
			headerStyle: EstiloHeader,
		}
	}
)

export default createSwitchNavigator(
    {
        Carregamento,
        StackPrincipal,
        StackAutenticacao,
    }, {
        initialRouteName: 'Carregamento'
    }
)