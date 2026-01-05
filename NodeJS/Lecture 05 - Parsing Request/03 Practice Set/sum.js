const sumRequestHandler = (req,res) => {
    const body = []
    req.on('data', chunk => {
        body.push(chunk)
    })
    req.on('end', () => {
        const bodystr = Buffer.concat(body).toString()
        const params = new URLSearchParams(bodystr)
        const bodyObj = Object.fromEntries(params)
        // console.log(bodyObj)
        const result = Number(bodyObj.first) + Number(bodyObj.second)
        console.log(result)
        // res.setHeader('Content-Type', 'text/html')
        res.write(`
            <html>
            <head><title>Result</title></head>
            <body>
                <h1>Your Result = ${result}</h1>
            </body>
            </html>
        `)
        return res.end()
    })
}

module.exports = sumRequestHandler