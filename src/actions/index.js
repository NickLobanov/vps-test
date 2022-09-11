export const GET_VPS_DATA = 'GET_VPS_DATA'

export function getVPSData() {
    return function(dispatch) {
        fetch('https://api.sweb.ru/notAuthorized', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "jsonrpc": "2.0",
                "method": "vpsOsConfig",
                "params": {}
            }
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: GET_VPS_DATA,
                data: data
            })
        })
    }
}