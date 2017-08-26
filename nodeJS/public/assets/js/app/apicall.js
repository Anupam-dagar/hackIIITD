var articles = document.getElementById('articles');
var entertainment = document.getElementById('entertainment');
var general = document.getElementById('general');
var politics = document.getElementById('politics');
var sport = document.getElementById('sport');
var technology = document.getElementById('technology');
articles.addEventListener("click", function(){
	//api key which I got from news-api
	var newsApiKey = 'acdbd4dee98048688947f71353a5e8b1';
	
	//declaring news sources
	var sportsSource = 'espn';
	var technicalSource = 'hacker-news';
	var normalSource = 'the-times-of-india';
	var googleSource = 'google-news';
	
	//creating news sources requests
	var espnRequest = new XMLHttpRequest();
	var hackerRequest = new XMLHttpRequest();
	var normalRequest = new XMLHttpRequest();
	var googleRequest = new XMLHttpRequest();
	
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

	googleRequest.open("GET", 'https://newsapi.org/v1/articles?source=' + googleSource + '&apiKey=' + newsApiKey);
	googleRequest.onload = function(){
		var googleData = JSON.parse(googleRequest.responseText);
		console.log(googleData);
		renderGoogle(googleData);
	};
	googleRequest.send();

});

function renderGoogle(googleData) {
	var googleString = "";
	var imgAddress = "";
	for (var i = 0; i < googleData.articles.length; i++) {
		imgAddress = googleData.articles[i].urlToImage;
		googleString += '<figure><img src="' + imgAddress + '"width="1200" height="570"/><figcaption><h1><a href="index.html#">' + googleData.articles[i].description + '</a></h1><span class="cat">' + googleData.articles[i].author + '</span></figcaption></figure>';
	}
	document.getElementById('goolenews').insertAdjacentHTML('afterbegin', googleString);
}

entertainment.addEventListener("click", function() {
	var entertainment = 'entertainment';
	var entertainmentRequest = new XMLHttpRequest();
	entertainmentRequest.open("GET", 'https://newsapi.org/v1/sources?category=' + entertainment + '&language=en');
	entertainmentRequest.onload = function(){
		var entertainmentData = JSON.parse(entertainmentRequest.responseText);
		console.log(entertainmentData);
	};
	entertainmentRequest.send();
});

general.addEventListener("click", function() {
	var general = 'general';
	var generalRequest = new XMLHttpRequest();
	generalRequest.open("GET", 'https://newsapi.org/v1/sources?category=' + general + '&language=en');
	generalRequest.onload = function(){
		var generalData = JSON.parse(generalRequest.responseText);
		console.log(generalData);
		generalfun(generalData);
	};
	generalRequest.send();
});

function generalfun(generalData) {
	console.log("called");
		for (var i = 0; i < generalData.length; i++) {
			console.log(generalData[i].sources.id);
		}
}

politics.addEventListener("click", function() {
	var politics = 'politics';
	var politicsRequest = new XMLHttpRequest();
	politicsRequest.open("GET", 'https://newsapi.org/v1/sources?category=' + politics + '&language=en');
	politicsRequest.onload = function(){
		var politicsData = JSON.parse(politicsRequest.responseText);
		console.log(politicsData);
	};
	politicsRequest.send();
});

science.addEventListener("click", function(){
	var science = 'science-and-nature';
	var scienceRequest = new XMLHttpRequest();
	scienceRequest.open("GET", 'https://newsapi.org/v1/sources?category=' + science + '&language=en');
	scienceRequest.onload = function(){
		var scienceData = JSON.parse(scienceRequest.responseText);
		console.log(scienceData);
	};
	scienceRequest.send();
});

sport.addEventListener("click", function(){
	var sport = 'sport';
	var sportRequest = new XMLHttpRequest();
	sportRequest.open("GET", 'https://newsapi.org/v1/sources?category=' + sport + '&language=en');
	sportRequest.onload = function(){
		var sportData = JSON.parse(sportRequest.responseText);
		console.log(sportData);
	};
	sportRequest.send();
});

technology.addEventListener("click", function(){
	var technology = 'technology';
	var technologyRequest = new XMLHttpRequest();
	technologyRequest.open("GET", 'https://newsapi.org/v1/sources?category=' + technology + '&language=en');
	technologyRequest.onload = function(){
		var technologyData = JSON.parse(technologyRequest.responseText);
		console.log(technologyData);
	};
	technologyRequest.send();
});

