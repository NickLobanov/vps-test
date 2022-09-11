import {GET_VPS_DATA} from '../actions'

const initialState = {
    vpsData: []
}

export const VPSReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VPS_DATA: {
            return {...state, vpsData: action.data}
        }
        default: {
            return state
        }
    }
}