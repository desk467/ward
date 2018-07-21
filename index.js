/** @format */

import { AppRegistry } from 'react-native'

import Roteamento from "./shared/roteamento"

import { name as appName } from './app.json'

AppRegistry.registerComponent(
    appName, () => Roteamento
)