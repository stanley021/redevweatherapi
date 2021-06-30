const { response } = require('express');
var express = require('express');
  
const request = require('request')
var router = express.Router();
const fetch = require("node-fetch");
var apikey = "d4f85c2e5ad12821ed7c2810bda01cb1";


router.get('/:location?', function (req, res, next) {
  console.log(getStubWeatherData(req.params.location))
  res.json(getStubWeatherData(req.params.location));
  
});

function show(data){
  return {
    weather: {
      location: data || 'londonon',
      temperature: `${3 / 2}\u2103`,
      weatherDescription: 3 % 2 == 0 ? 'partly cloudy' : 'sunny'
    }
  };
}

async function getStubWeatherData(location) {
  const base = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`

  return (await fetch(base)).json();

  
}




module.exports = router;
