import axios from 'axios'

import { AsyncStorage } from 'react-native'

export const webservice = () => {
    // const token = AsyncStorage.getItem('token')
    let headers = {
        'Content-Type': 'application/json'
    }

    if (token) {
        headers['Authorization'] = token
    }

    let instance = axios.create({
        baseURL: env.HOST,
        headers
    })

    return instance
}