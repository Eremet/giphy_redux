import axios from 'axios'
import {API, KEY} from '../config'
export const GET_WEATHER = 'GET_WEATHER'

export function getWeather(country){
    const url = API + country +KEY
    const request = axios.get(url)
    console.log(request)
    return{
        type:GET_WEATHER,
        payload:request
    }
}