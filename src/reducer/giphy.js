import {GET_GIPHY} from '../action'

export default function(state=[], action){
    switch(action.type){
        case GET_GIPHY:
            return[action.payload.data.data]
    }
    return state
}