import {
    GET_CATEGORIES,
    GET_DATACENTERS,
    GET_OSPANEL,
    GET_SELECTOS,
    GET_SELECTPANEL,
    GET_VPSPLANS} from '../actions'

const initialState = {
    categories: [],
    datacenters: [],
    osPanel: [],
    selectOs: [],
    selectPanel: [],
    vpsPlans: []
}

export const VPSReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES: {
            return {...state, categories: action.categories}
        }
        case GET_DATACENTERS: {
            return {...state, datacenters: action.center}
        }
        case GET_OSPANEL: {
            return {...state, osPanel: action.osPanel}
        }
        case GET_SELECTOS: {
            return {...state, selectOs: action.selectOs}
        }
        case GET_SELECTPANEL: {
            return {...state, selectPanel: action.selectPanel}
        }
        case GET_VPSPLANS: {
            return {...state, vpsPlans: action.vpsPlans}
        }
        default: {
            return state
        }
    }
}