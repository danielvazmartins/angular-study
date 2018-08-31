let http = require('http')

const elasticUrl = 'http://localhost:9200'

// Nao funcionando, verificar
http.get({
    hostname: 'localhost',
    port: '9200',
    headers: {
        'accept': 'application/json'
    }
}, result => {
    console.log(result)
})