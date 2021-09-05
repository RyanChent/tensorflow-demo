const getApi = (protocol = location.protocol, port = 3000) => `${protocol}//${location.hostname}:${port}`

const config = {
    backen: getApi(),
    ws: getApi('ws:'),
    github: 'https://api.github.com'
}

window.$config = config

if (!module) {
    module.exports = config
}