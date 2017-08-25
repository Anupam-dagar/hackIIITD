var btn = document.getElementById('btn');

btn.addEventListener("click", function(){
	var newsApiKey = 'acdbd4dee98048688947f71353a5e8b1';
	var sportsSource = 'espn';
	var technicalSource = 'hacker-news';
	var normalSource = 'the-times-of-india';
	var espnRequest = new XMLHttpRequest();
	var hackerRequest = new XMLHttpRequest();
	var ourRequest2 = new XMLHttpRequest();
	var ourRequest3 = new XMLHttpRequest();
	espnRequest.open("GET", 'https://newsapi.org/v1/articles?source=' + sportsSource + '&apiKey=' + newsApiKey);
	espnRequest.onload = function(){
		var espnData = JSON.parse(espnRequest.responseText);
		console.log(espnData);
	};
	espnRequest.send();

	hackerRequest.open("GET", 'https://newsapi.org/v1/articles?source=' + technicalSource + '&sortBy=latest&apiKey=' + newsApiKey);
	hackerRequest.onload = function(){
		var hackerData = JSON.parse(hackerRequest.responseText);
		console.log(hackerData);
	};
	hackerRequest.send();
});