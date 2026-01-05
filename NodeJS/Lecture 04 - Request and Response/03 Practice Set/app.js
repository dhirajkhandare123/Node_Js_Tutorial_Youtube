const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.write('<h1>Welcome to Home</h1>')
        return res.end()
    }
    else if(req.url === '/men'){
        res.write('<h1>Welcome to mens section</h1>')
        return res.end()
    }
    else if(req.url === '/women'){
        res.write('<h1>Welcome to womens section</h1>')
        return res.end()
    }
    else if(req.url === '/kids'){
        res.write('<h1>Welcome to kids section</h1>')
        return res.end()
    }
    else if(req.url === '/cart'){
        res.write('<h1>Welcome to cart section</h1>')
        return res.end()
    }
    res.write('<html lang="en">')
    res.write('<head><title>Document</title></head>')
    res.write('<body>')
    res.write('<div>')
    res.write('<ul>')
    res.write('<li><a href="/home">Home</a></li>')
    res.write('<li><a href="/men">Men</a></li>')
    res.write('<li><a href="/women">Women</a></li>')
    res.write('<li><a href="/kids">Kids</a></li>')
    res.write('<li><a href="/cart">Cart</a></li>')
    res.write('</ul>')
    res.write('</div>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
})



const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`)
})