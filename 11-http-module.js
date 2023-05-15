const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is the about page')
    }
    /*res.end(`
    <h1>OOPS</h1>
    <p>Cant find your page</p>
    <a href="/">back home</a>
    `)*/

})

server.listen(5000)