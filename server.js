var http = require("http");

function onrequest(request,response){
    console.log("A user response"+request.url);
    response.writeHead(202,{"context-type":"text-plain"});
    response.write("your response");
    response.end();
}



http.createServer(onrequest).listen(8080);
console.log('Server is Running.....!!! ');