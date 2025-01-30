const http =require("http")
const fs = require('fs')
const home = fs.readFileSync("./index.html")
const about = fs.readFileSync("./about.html")
const contact = fs.readFileSync("./contact.html")
const PORT = "3000" 
const hostname = "localhost"
const server = http.createServer((req,res)=>{
    //console.log('Server is working');
    if(req.url === '/'){
        return res.end(home)
    }
    if(req.url === '/about'){
        return res.end(about)
    }
    if(req.url === '/contact'){
        return res.end(contact)
    }else{
        return res.end("404 Not found page")
    }
    
})


server.listen(PORT,hostname,()=>{
    console.log(`server is running on http://${hostname}:${PORT}`);
})
