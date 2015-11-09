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


function preload(){
	getRats();
}

function setup(){
	var ratsUrl = 'https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000'; 
	loadJSON(ratsurl, getRats);

}

function draw(){
	background(200);

}


// this is gonna grab the NYC open data stuff
function getRats(){

	// get the zipcode value out of the loaded JSON
  	var zipcode = rats.main.humidity;
 	fill(0, humidity); // use the humidity value to set the alpha
 	ellipse(width/2, height/2, 50, 50);

}

function ratsDownloaded(){
	// this will run once the city open data is grabbed
	console.log(rats.length); // how many records?
}
