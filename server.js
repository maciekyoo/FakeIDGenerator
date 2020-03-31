const http = require('http');
const server = http.createServer(function(req, res){
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200); //status code HTTP 200 (ok)
    
    const maleNames = require('./MaleNames.json');
    const femaleNames = require('./FemaleNames.json');
    const sex = require('./Gender.json');
    const lastFemaleName = require('./FemaleLastNames.json');
    const lastMaleName = require('./MaleLastNames.json');
    const phoneNumber = Math.floor(Math.random()*8+1)+Math.random().toString().slice(2,10);
    var randomName;
    var randomLastName;
    var getGenderIndex = Math.floor(Math.random()*sex.length);
    var getRandomGender = sex[getGenderIndex];
    if (getRandomGender === 'Male') {
        var randommaleName = Math.floor(Math.random()*maleNames.length);
        randomName = maleNames[randommaleName];
        var randomLastNameIndex = Math.floor(Math.random()*lastMaleName.length);
        randomLastName = lastMaleName[randomLastNameIndex];
    }
    else {
        var randomString = Math.floor(Math.random()*femaleNames.length);
        randomName = femaleNames[randomString];
        var randomLastNameIndex = Math.floor(Math.random()*lastFemaleName.length);
        randomLastName = lastFemaleName[randomLastNameIndex];
    }
    const result = {};
    result['firstname'] = randomName;
    result['lastname'] = randomLastName;
    result['gender'] = getRandomGender;
    result['phonenumber'] = phoneNumber;

    res.end(JSON.stringify(result));
});
server.listen(8080, '127.0.0.1', function () {       
    console.log("listening on 127.0.0.1:8080");
})