const server = require ("http");
server.createServer((req,res)=>
{
    res.write("My First Server")
    res.end()

    if(req.url==='/'){
        res.write("home page")
        res.end()    
    }

    else
        if(req.url==='/about'){
        res.write("about Page")
        res.end()    
    }

     else
        if(req.url==='/contact'){
        res.write("contact page")
        res.end()    
    }

    else{
        res.write("Page not found 404")
        res.end()
    }

}).listen(5000, ()=> {
    console.log("Server is runng at port 5000")
})

