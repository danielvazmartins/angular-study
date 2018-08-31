var elasticsearch = require('elasticsearch');

// Cria a conexão com o elasticsearch
var client = new elasticsearch.Client({
    host: 'localhost:9200',
    //log: 'trace'
});
    
function search() {
    client.search().then(data => {
        console.log(data)
    })
}

function create() {
    client.index({
        index: 'monitor',
        type: 'requests',
        body: {
            "dateTime": "30/08/2018 16:05",
            "status": true
        }
    }).then(data => {
        console.log(data)
    })
}

(function genRequests(startDate, application) {
    let dateTime = new Date(startDate)
    let currDateTime = new Date()

    while( dateTime <= currDateTime ) {

        // Eventos de sucesso de 70 a 100
        let numSuccess = randomNumber(30, 70)
        let numErrorsWithImpact = randomNumber(3,0)
        let numErrorsWithoutImpact = randomNumber(5,0)

        bulkResquest(dateTime, numSuccess, numErrorsWithImpact, numErrorsWithoutImpact, application)
        dateTime = addMinutes(dateTime, 15)        
    }
})('08/29/2018', 'C2')

//createRequest('2018-08-31T12:45:00.000Z', 'success', false, 'C2')

function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

function randomNumber(range, start) {
    return Math.floor(Math.random() * range) + start
}

function bulkResquest(dateTime, numSuccess, numErrorsWithImpact, numErrorsWithoutImpact, application) {
    // Requisições de sucesso
    for (let i = 1; i <= numSuccess; i++) {
        //createRequest(dateTime, 'success', false, application)
        setTimeout(
            function() {
                createRequest(dateTime, 1, application)
            },1000 * i
        )
    }
    // Requisições de erro com impacto
    for (let i = 1; i <= numErrorsWithImpact; i++) {
        //createRequest(dateTime, 'error', true, application)
        setTimeout(
            function() {
                createRequest(dateTime, 2, application)
            },1000 * i + 300
        )
    }
    // Requisições de erro sem impacto
    for (let i = 1; i <= numErrorsWithoutImpact; i++) {
        //createRequest(dateTime, 'error', false, application)
        setTimeout(
            function() {
                createRequest(dateTime, 3, application)
            },1000 * i +
        )
    }
}

function createRequest(dateTime, status, application) {
    client.index({
        index: 'monitor',
        type: 'requests',
        body: {
            "dateTime": dateTime,
            "status": status,
            "application": application
        }
    }).then(data => {
        console.log('SUCESSO')
    }, error => {
        console.log('ERRO: ', error)
    })
}