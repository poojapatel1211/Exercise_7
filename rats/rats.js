/*
	
	Using an open API, parse the json or XML data to pull out various
 	bits of information.
	Then visualize this information on the screen in some way.

	OpenWeatherMap is another API that does not require API keys:
	http://openweathermap.org/API

	A few others are listed at the bottom of this link:
	https://github.com/processing/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON

	See Chapter 18 in LP AND reference Chapter 12 in Make: Getting Started with P5.js

	This is due on November 10th and is worth 2 Exercises
*/



//https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000


//program looks at temp in NYC and recommends clothing options based on temp range
//I decided to use this instead of the rats api because I think that this is a better idea for data visualization

function setup(){
	createCanvas(500,500);
	var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork&APPID=f126c7ca5adc148cc58a0f0313448351&units=metric'; 
	

	loadJSON(weatherUrl, getWeather);

}

// this is gonna grab the NYC open data stuff
function getWeather(){
	weather = data;

}

function draw(data){
	//background(255);

	//IF STATEMENT FOR CLOTHING
	if(weather.main.temp > -9 && weather.main.temp < 0){  //jan/feb
		background(); //color
		//add outfit for weather
	}else if(weather.main.temp > 1 && weather.main.temp < 10){  //march/nov/dec
		background(); //color
		//add outfit for weather
	}else if(weather.main.temp > 11 && weather.main.temp < 20){  //april/may/sept/oct
		background(); //color
		//add outfit for weather
	}else if(weather.main.temp > 21 && weather.main.temp < 30){  //may/june/july
		background(); //color
		//add outfit for weather
	}else if(weather.main.temp > 31 && weather.main.temp < 40){  //july
		background(); //color
		//add outfit for weather
	}

	//IF STATEMENT FOR CLOUDS IN BACKGROUND
	if(weather.clouds.all > 50){
		//clouds moving across screen
	}

	//IF STATEMENT FOR WIND
	if(weather.wind.speed > 6){
		//wind noise
	}
}




