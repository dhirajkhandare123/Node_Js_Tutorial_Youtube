const { Console } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>First Page</title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to home');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>First Page</title></head>');
        res.write('<body>');
        res.write('<h1>This is product page.</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>First Page</title></head>');
    res.write('<body>');
    res.write('<h1>Like / Share / Subscribe.</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server Running on address http://localhost:${PORT}`)
})