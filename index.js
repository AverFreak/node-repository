let request = require('request');

let apiKey = 'b49b6f1cc278ce0dee12a4a44d8e389c';
let city = 'ahmedabad';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';

request(url, function(err, response, body){
	if(err){
		console.log('error',error);
	}
	else{
		console.log('body', body);
	}
});
