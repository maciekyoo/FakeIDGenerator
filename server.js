const Express = require('express');
const Cors = require('cors');

const server = new Express();

server.use(Cors());

server.get('/', (req, res) => {
    const result = {};

    var evenNumberArray = [0, 2, 4, 6, 8];
    var oddNumberArray = [1, 3, 5, 7, 9];
    const mail = require('./emails.json');
    const getrandomemailindex = Math.floor(Math.random()*mail.length);
    const getrandomemail = mail[getrandomemailindex];
    const randomevennumber = evenNumberArray[Math.floor(Math.random() * evenNumberArray.length)];
    const randomoddnumber = oddNumberArray[Math.floor(Math.random() * oddNumberArray.length)];
    const maleNames = require('./MaleNames.json');
    const femaleNames = require('./FemaleNames.json');
    const sex = require('./Gender.json');
    const lastFemaleName = require('./FemaleLastNames.json');
    const lastMaleName = require('./MaleLastNames.json');
    const City = require('./TownandZipcode.json');
    const phoneNumber = Math.floor(Math.random()*8+1)+Math.random().toString().slice(2,10);
    const getTownindex = Math.floor(Math.random()*City.length);
    const num1 = Math.floor(Math.random()*10);
    const num2 = Math.floor(Math.random()*10);
    const num3 = Math.floor(Math.random()*10);
    var getRandomtown = City[getTownindex];
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

    const max = Math.floor(Date.now() / 1000);
                        const min = Math.floor((new Date('1980-01-01 00:00:00')).getTime() / 1000);
                        const birthTime = Math.floor(Math.random() * (max - min + 1)) + min;
                        var d = new Date (birthTime * 1000);
                        var datetime;
                        datetime = d.toISOString().slice(0,10);       
                        console.log(birthTime);
                        console.log(new Date(birthTime * 1000));
                        var getyear = d.getFullYear().toString();
                        var year = getyear.substring(2,4)
                        var month = d.getMonth().toString();
                        var day = d.getDay().toString();
                        var pesel;
                        if (getRandomGender === 'Male'){
                            if(year > '1999' && month.length < 2 && day.length < 2){
                                pesel = year + '2' + month + '0' + day + num1 + num2 + num3 + randomoddnumber;
                            }
                            else if(year > '1999' && month.length > 2 && day.length > 2){
                                pesel = year + month + day + num1 + num2 + num3 + randomoddnumber;
                            }
                            else if(year < '2000' && month.length < 2 && day.length < 2){
                                pesel = year + '2' + month + '0' + day + num1 + num2 + num3 + randomoddnumber;
                            }
                            else if(year < '2000' && month.length > 2 && day.length > 2){
                                pesel = year + month + day + num1 + num2 + num3 + randomoddnumber;
                            }
                        }
                        if (getRandomGender === 'Female'){
                            if(year > '1999' && month.length < 2 && day.length < 2){
                                pesel = year + '2' + month + '0' + day + num1 + num2 + num3 + randomevennumber;
                            }
                            else if(year > '1999' && month.length > 2 && day.length > 2){
                                pesel = year + month + day + num1 + num2 + num3 + randomevennumber;
                            }
                            else if(year < '2000' && month.length < 2 && day.length < 2){
                                pesel = year + '2' + month + '0' + day + num1 + num2 + num3 + randomevennumber;
                            }
                            else if(year < '2000' && month.length > 2 && day.length > 2){
                                pesel = year + month + day + num1 + num2 + num3 + randomevennumber;
                            }
                        }
        const multipliers = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
        const peselArray = Array.from(pesel).map((number, i) => parseInt(number) * multipliers[i]);
        const sum = peselArray.reduce((sum, number) => {
            return sum + number;
        }, 0);
        pesel += sum%10;
        console.log(pesel);

    result['firstname'] = randomName;
    result['lastname'] = randomLastName;
    result['gender'] = getRandomGender;
    result['phonenumber'] = phoneNumber;
    result['residenceplace'] = getRandomtown;
    result['PIN'] = pesel;
    result['Date'] = datetime;
    result['email'] = getrandomemail;

    res.json(result);
});

server.listen(8080, '127.0.0.1', function () {       
    console.log("listening on 127.0.0.1:8080");
})



                        

