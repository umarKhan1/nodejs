var http = require('http');
var fs = require('fs');

function errordetect(Response){
    Response.writeHead(404,{"context-type":"text-plain"});
    Response.writeHead("Error");
    Response.end();
}

function onresponse(request,Response){
    if(request.method == 'GET' && request.url == '/')
    {
        Response.writeHead(202,{"Context-Type":"new/html"});
        fs.createReadStream("./new.html").pipe(Response)

    }
    else
    {
        errordetect(Response);
    }
}



http.createServer(onresponse).listen(8080);
console.log("server is running ...!!! ");