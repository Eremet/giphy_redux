import {GET_WEATHER} from '../action'

export default function(state=[], action){
    switch(action.type){
        case GET_WEATHER:
            return[action.payload.data]
    }
    return state
}