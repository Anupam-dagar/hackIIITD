var btn = document.getElementById('btn');

btn.addEventListener("click", function(){
	//api key which I got from news-api
	var newsApiKey = 'acdbd4dee98048688947f71353a5e8b1';
	
	//declaring news sources
	var sportsSource = 'espn';
	var technicalSource = 'hacker-news';
	var normalSource = 'the-times-of-india';
	
	//creating news sources requests
	var espnRequest = new XMLHttpRequest();
	var hackerRequest = new XMLHttpRequest();
	var normalRequest = new XMLHttpRequest();
	
	//calling the request and parsing JSON along with logging onto console
	espnRequest.open("GET", 'https://newsapi.org/v1/articles?source=' + sportsSource + '&apiKey=' + newsApiKey);
	espnRequest.onload = function(){
		var espnData = JSON.parse(espnRequest.responseText);
		//console.log(espnData);
	};
	espnRequest.send();

	hackerRequest.open("GET", 'https://newsapi.org/v1/articles?source=' + technicalSource + '&sortBy=latest&apiKey=' + newsApiKey);
	hackerRequest.onload = function(){
		var hackerData = JSON.parse(hackerRequest.responseText);
		//console.log(hackerData);
	};
	hackerRequest.send();

	normalRequest.open("GET", 'https://newsapi.org/v1/articles?source=' + normalSource + '&sortBy=latest&apiKey=' + newsApiKey);
	normalRequest.onload = function(){
		var normalData = JSON.parse(normalRequest.responseText);
		//console.log(normalData);
	};
	normalRequest.send();

	//call by sources to get news by category
	
	//declare tags
	var entertainment = 'entertainment';
	var general = 'general';
	var politics = 'politics';
	var science = 'science-and-nature';
	var sport = 'sport';
	var technology = 'technology';

	//creating requests
	var entertainmentRequest = new XMLHttpRequest();
	var generalRequest = new XMLHttpRequest();
	var politicsRequest = new XMLHttpRequest();
	var scienceRequest = new XMLHttpRequest();
	var sportRequest = new XMLHttpRequest();
	var technologyRequest = new XMLHttpRequest();

	//calling requests
	entertainmentRequest.open("GET", 'https://newsapi.org/v1/sources?category=' + entertainment + '&language=en');
	entertainmentRequest.onload = function(){
		var entertainmentData = JSON.parse(entertainmentRequest.responseText);
		//console.log(entertainmentData);
	};
	entertainmentRequest.send();

	generalRequest.open("GET", 'https://newsapi.org/v1/sources?category=' + general + '&language=en');
	generalRequest.onload = function(){
		var generalData = JSON.parse(generalRequest.responseText);
		//console.log(generalData);
	};
	generalRequest.send();

	politicsRequest.open("GET", 'https://newsapi.org/v1/sources?category=' + politics + '&language=en');
	politicsRequest.onload = function(){
		var politicsData = JSON.parse(politicsRequest.responseText);
		//console.log(politicsData);
	};
	politicsRequest.send();

	scienceRequest.open("GET", 'https://newsapi.org/v1/sources?category=' + science + '&language=en');
	scienceRequest.onload = function(){
		var scienceData = JSON.parse(scienceRequest.responseText);
		console.log(scienceData);
	};
	scienceRequest.send();

	sportRequest.open("GET", 'https://newsapi.org/v1/sources?category=' + sport + '&language=en');
	sportRequest.onload = function(){
		var sportData = JSON.parse(sportRequest.responseText);
		console.log(sportData);
	};
	sportRequest.send();
});