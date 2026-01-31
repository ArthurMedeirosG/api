import http from 'node:http';


const user = {
    id: crypto.randomUUID(),
    name: 'Fulanilson de tal',
    phone: '859999999999',
    adress: {
        street: 'Rua do fulanilson',
        number: 71
    }
};

const userJSON = JSON.stringify(user);



http.createServer((request, response)=>{
    response.writeHead(200, {'content-type': 'application/json; charset=utf-8'})
    response.end(userJSON)
}).listen(3000);

