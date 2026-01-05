const sumRequestHandler = require('./sum')

const requestHandler = (req, res) => {
    
    if (req.url === '/') {
       res.setHeader('Content-Type', 'text/html')
        res.write(`
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        </head>
        <body>
            <h1>Welcome This is Home</h1>
            <a href="/calculator">Go to calculator</a>
        </body>
        </html>    
        `)
        return res.end()
        
    }
    else if(req.url === '/calculator'){
        res.setHeader('Content-Type', 'text/html')
        res.write(`
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body>
            <form action="/calculate-result" method="POST">
                <h1>My calculator</h1>
                <input type="text" name="first" placeholder="Enter first number">
                <input type="text" name="second" placeholder="Enter second number">
                <button type="submit" value="submit">Submit</button>
            </form>
        </body>

        </html>   
        `)     
        return res.end()  
    }
    else if(req.url === '/calculate-result' && req.method === 'POST'){
        sumRequestHandler(req,res)
        return res.end()
    }

        res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>

            <body>
                <h1>404 page not found</h1>
                <a href="/">Go to home</a>
            </body>

            </html>
        `)
        return res.end()
    
    
}

module.exports = requestHandler