var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	let NewsAPI = require('newsapi');
 
let newsapi = new NewsAPI('e03aa59888c949099e40b3f09b961f6a');
 
// To query articles: 
newsapi.articles({
  source: 'the-guardian-uk', // required 
  sortBy: 'latest' // optional 
}).then(articlesResponse => {
	
		console.log(articlesResponse);

  newsapi.articles({
  source: 'google-news', // required 
  sortBy: 'top' // optional 
}).then(topresponses => {
  console.log(topresponses);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
    newsapi.articles({
  source: 'cnn', // required 
  sortBy: 'top' // optional 
}).then(slider => {
  console.log(slider);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */

   res.render('gadget', { title: 'Express',article:articlesResponse.articles,top:topresponses.articles,slider:slider.articles});

});
   

});

  
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
});



  
});


router.get('/tech', function(req, res, next) {
	let NewsAPI = require('newsapi');
 
let newsapi = new NewsAPI('e03aa59888c949099e40b3f09b961f6a');
 
// To query articles: 
newsapi.articles({
  source: 'hacker-news', // required 
  sortBy: 'latest' // optional 
}).then(articlesResponse => {
	
		console.log(articlesResponse);

  newsapi.articles({
  source: 'google-news', // required 
  sortBy: 'top' // optional 
}).then(topresponses => {
  console.log(topresponses);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
    newsapi.articles({
  source: 'cnn', // required 
  sortBy: 'top' // optional 
}).then(slider => {
  console.log(slider);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */

   res.render('gadget', { title: 'Express',article:articlesResponse.articles,top:topresponses.articles,slider:slider.articles});

});
   

});

  
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
});



  
});


router.get('/finance', function(req, res, next) {
	let NewsAPI = require('newsapi');
 
let newsapi = new NewsAPI('e03aa59888c949099e40b3f09b961f6a');
 
// To query articles: 
newsapi.articles({
  source: 'financial-times', // required 
  sortBy: 'latest' // optional 
}).then(articlesResponse => {
	
		console.log(articlesResponse);

  newsapi.articles({
  source: 'google-news', // required 
  sortBy: 'top' // optional 
}).then(topresponses => {
  console.log(topresponses);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
    newsapi.articles({
  source: 'cnn', // required 
  sortBy: 'top' // optional 
}).then(slider => {
  console.log(slider);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */

   res.render('gadget', { title: 'Express',article:articlesResponse.articles,top:topresponses.articles,slider:slider.articles});

});
   

});

  
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
});



  
});


router.get('/gadget', function(req, res, next) {
	let NewsAPI = require('newsapi');
 
let newsapi = new NewsAPI('e03aa59888c949099e40b3f09b961f6a');
 
// To query articles: 
newsapi.articles({
  source: 'engadget', // required 
  sortBy: 'latest' // optional 
}).then(articlesResponse => {
	
		console.log(articlesResponse);

  newsapi.articles({
  source: 'google-news', // required 
  sortBy: 'top' // optional 
}).then(topresponses => {
  console.log(topresponses);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
    newsapi.articles({
  source: 'cnn', // required 
  sortBy: 'top' // optional 
}).then(slider => {
  console.log(slider);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */

   res.render('gadget', { title: 'Express',article:articlesResponse.articles,top:topresponses.articles,slider:slider.articles});

});
   

});

  
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
});



  
});


router.get('/sports', function(req, res, next) {
	let NewsAPI = require('newsapi');
 
let newsapi = new NewsAPI('e03aa59888c949099e40b3f09b961f6a');
 
// To query articles: 
newsapi.articles({
  source: 'espn', // required 
  sortBy: 'top' // optional 
}).then(articlesResponse => {
	
		console.log(articlesResponse);

  newsapi.articles({
  source: 'google-news', // required 
  sortBy: 'top' // optional 
}).then(topresponses => {
  console.log(topresponses);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
    newsapi.articles({
  source: 'cnn', // required 
  sortBy: 'top' // optional 
}).then(slider => {
  console.log(slider);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */

   res.render('gadget', { title: 'Express',article:articlesResponse.articles,top:topresponses.articles,slider:slider.articles});

});
   

});

  
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
});



  
});


router.get('/Games', function(req, res, next) {
	let NewsAPI = require('newsapi');
 
let newsapi = new NewsAPI('e03aa59888c949099e40b3f09b961f6a');
 
// To query articles: 
newsapi.articles({
  source: 'ign', // required 
  sortBy: 'top' // optional 
}).then(articlesResponse => {
	
		console.log(articlesResponse);

  newsapi.articles({
  source: 'google-news', // required 
  sortBy: 'top' // optional 
}).then(topresponses => {
  console.log(topresponses);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
    newsapi.articles({
  source: 'cnn', // required 
  sortBy: 'top' // optional 
}).then(slider => {
  console.log(slider);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */

   res.render('gadget', { title: 'Express',article:articlesResponse.articles,top:topresponses.articles,slider:slider.articles});

});
   

});

  
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
});



  
});



router.get('/Science', function(req, res, next) {
	let NewsAPI = require('newsapi');
 
let newsapi = new NewsAPI('e03aa59888c949099e40b3f09b961f6a');
 
// To query articles: 
newsapi.articles({
  source: 'national-geographic', // required 
  sortBy: 'top' // optional 
}).then(articlesResponse => {
	
		console.log(articlesResponse);

  newsapi.articles({
  source: 'google-news', // required 
  sortBy: 'top' // optional 
}).then(topresponses => {
  console.log(topresponses);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
    newsapi.articles({
  source: 'cnn', // required 
  sortBy: 'top' // optional 
}).then(slider => {
  console.log(slider);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */

   res.render('gadget', { title: 'Express',article:articlesResponse.articles,top:topresponses.articles,slider:slider.articles});

});
   

});

  
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
});



  
});


router.get('/music', function(req, res, next) {
	let NewsAPI = require('newsapi');
 
let newsapi = new NewsAPI('e03aa59888c949099e40b3f09b961f6a');
 
// To query articles: 
newsapi.articles({
  source: 'mtv-news', // required 
  sortBy: 'top' // optional 
}).then(articlesResponse => {
	
		console.log(articlesResponse);

  newsapi.articles({
  source: 'google-news', // required 
  sortBy: 'top' // optional 
}).then(topresponses => {
  console.log(topresponses);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
    newsapi.articles({
  source: 'cnn', // required 
  sortBy: 'top' // optional 
}).then(slider => {
  console.log(slider);
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */

   res.render('gadget', { title: 'Express',article:articlesResponse.articles,top:topresponses.articles,slider:slider.articles});

});
   

});

  
  /*
    {
      status: "ok",
      source: "associated-press",
      sortBy: "top",
      articles: [
        ...
      ]
    }
   */
});



  
});





module.exports = router;
