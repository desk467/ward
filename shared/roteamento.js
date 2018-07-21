import { createStackNavigator, createSwitchNavigator } from "react-navigation"

/* Paginas */

import { Carregamento } from './paginas/Carregamento'
import { Inicio } from './paginas/Inicio'
import { Login } from './paginas/Login'

import { TemaDefault } from './temas'

/***************************** */

const StackPrincipal = createStackNavigator(
	{
		Inicio,
	},
	{
		navigationOptions: TemaDefault.navigationOptions
	}
)

const StackAutenticacao = createStackNavigator(
	{
		Login,
	}, {
		navigationOptions: TemaDefault.navigationOptions
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