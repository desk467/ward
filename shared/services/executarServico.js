import axios from 'axios'

import { AsyncStorage } from 'react-native'

function rotear(ROTA_BASE, {metodo, url, headers, data}) {
	return AsyncStorage.getItem('token').then(token => {

		if(token){
			headers = {...headers, 'Authorization': token }
		}
		
		if(data) {
			return axios[metodo](ROTA_BASE + url, data, { headers })		
		} else {
			return axios[metodo](ROTA_BASE + url, { headers })		
		}
	})
}

export default (rota) => rotear('https://chord.app/api', rota)