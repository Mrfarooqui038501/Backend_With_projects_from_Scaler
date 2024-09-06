// we will create local server 
// const http  = require("http");

// const server = http.createServer((req,res) => {
//     res.setHeader("Content-Type", "text/plain");
//     res.write("I am learing backend from Scaler")
//     res.end();
// })

// const port = 3000
// const host = "localhost"
//  server.listen(port,host, () => {
//     console.log(`Server is running fine on http://${host}:${port}`)
//  });


const http = require('http')
const server =   http.createServer((req,res) => {
    res.setHeader("Content-type", "text/html");
    res.write('<h1> Hi it from my new server')
    res.end()
})

const port = 4000
const host = "localhost"

server.listen(port, host, () =>{
    console.log(`Server is running on new server http://${host}:${port}`)
});