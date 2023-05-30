const http = require('http')

function requestListener(request, response) {
    response.end('Hello there')


}

const server = http.createServer(requestListener)
server.listen(5001)
console.log(server)