const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        res.end('Welcome Home Zarinah!')
    }
    if(req.url === '/about'){
        res.end('You are now Home, Adyeeri.')
    }
    res.end(`<h1>Mayo!!!</h1> <a href="/">Rudi Nyumbani</a>`)
})

server.listen(5000)