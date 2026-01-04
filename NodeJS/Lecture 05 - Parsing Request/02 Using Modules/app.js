const http = require('http');
const useRequestHandler = require('./user')

const server = http.createServer(useRequestHandler);

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server Running on address http://localhost:${PORT}`)
})