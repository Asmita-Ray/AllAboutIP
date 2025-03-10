const APIS = {
    "getIP": "http://127.0.0.1:9999/apis/getIP/",
    "enquireIP": "http://127.0.0.1:9999/apis/enquireIP"
}

function APIReq (method = 'GET', api, body = {}) {

    fetch(`${APIS["getIP"]}/${body.data.toString()}`).then(resp => {
        return JSON.parse(resp.data)
    }).then(retObj => {
        return retObj
    })
    
}

function updateIP() {
    var ip = "100.100.100.100"
    // var ip = APIReq('GET', 'getIP', {})
    document.getElementById('IP_PLACEHOLDER').innerHTML = `${ip}`;
    document.getElementById('ip_box').style.display = 'block';
}