const http = require('http');
const server = http.createServer(function(req, res){
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200); //status code HTTP 200 (ok)

    const fs = require('fs');
    const fileContents = fs.readFileSync('./MaleNames.json', 'utf8');
    try {
        data = JSON.parse(fileContents)
    } catch(err) {
        console.error(err)
    }

    res.end(data);
});
server.listen(8080, '127.0.0.1', function () {       
    console.log("listening on 127.0.0.1:8080");
})                                                  