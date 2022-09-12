export const GET_CATEGORIES = 'GET_VPS_DATA'
export const GET_DATACENTERS = 'GET_DATACENTERS'
export const GET_OSPANEL = 'GET_OSPANEL'
export const GET_SELECTOS = 'GET_SELECTOS'
export const GET_SELECTPANEL = 'GET_SELECTPANEL'
export const GET_VPSPLANS = 'GET_VPSPLANS'

export function getVPSData() {
    return function(dispatch) {
        fetch('https://api.sweb.ru/notAuthorized', {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "vpsOsConfig",
                "params": {}
            })
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_CATEGORIES,
                categories: data.result.categories
            })
            dispatch({
                type: GET_DATACENTERS,
                center: data.result.datacenters
            })
            dispatch({
                type: GET_OSPANEL,
                osPanel: data.result.osPanel
            })
            dispatch({
                type: GET_SELECTOS,
                selectOs: data.result.selectOs
            })
            dispatch({
                type: GET_SELECTPANEL,
                selectPanel: data.result.selectPanel
            })
            dispatch({
                type: GET_VPSPLANS,
                vpsPlans: data.result.vpsPlans
            })
        })
    }
}