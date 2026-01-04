const { Console } = require('console');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>First Page</title></head>');
        res.write('<body>');
        res.write('<h1>Enter your details');

        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="UserName"><br>');
        res.write('<input type="radio" id="male" name="gender" value="male">')
        res.write('<label for="male">Male</label>')
        res.write('<input type="radio" id="female" name="gender" value="female">')
        res.write('<label for="male">Female</label><br>')
        res.write('<input type="submit" value="Submit">')
        res.write('</form>')

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
    else if (req.url === '/submit-details' && req.method === 'POST') {
        
        fs.writeFileSync('user.txt', 'Prashant Jain');
        res.statusCode = 302;
        res.setHeader('Location', '/');
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

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server Running on address http://localhost:${PORT}`)
})