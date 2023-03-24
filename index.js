

const http = require('http')
const fs = require('fs')
// const obj  ={
//     Name : 'Sachin',
//     Age : 24,
//     Gender : 'Male'
// }
// const data = fs.readFileSync('data.json', 'utf-8')
// console.log(data)
// const objData = JSON.parse(data)
// console.log(objData)

const data = fs.readFileSync('data.json', 'utf-8')


const server = http.createServer((req, res)=>{
    console.log(req.url)
    console.log('Server Created successfully')
    if(req.url === '/'){
        res.end('<h1>Home Page Section</h1>')
    }else if(req.url === '/contact'){
        res.end('<h1>Contact Us Page Section</h1>')
    }else if(req.url === '/about'){
        res.end('<h1>About Us Page Section</h1>')
    }else if(req.url === '/services'){
        res.end('<h1>Service Page Section</h1>')
    }else if(req.url === '/api'){
        res.end(data)
    }
    else{
        res.writeHead(404, {'content-type' : 'application/json'})
        res.end('404, Page not Found')
    }
    // res.end(data)
})

server.listen(8080)