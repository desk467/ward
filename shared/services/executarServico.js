import axios from 'axios'

import { AsyncStorage } from 'react-native'

async function rotear(ROTA_BASE, { metodo, url, headers, data }) {
	const token = await AsyncStorage.getItem('token')

	if (token) {
		headers = { ...headers, 'Authorization': token }
	}

	if (data) {
		return await axios[metodo](ROTA_BASE + url, data, { headers })
	} else {
		return await axios[metodo](ROTA_BASE + url, { headers })
	}
}

export default (rota) => rotear('https://chord.app/api', rota)