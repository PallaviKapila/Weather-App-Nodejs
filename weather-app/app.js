const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=3ce24efb523d31ef441de308bd827fc4&query=37.8267,-122.4233&units=f";
request({ url: url, json: true }, (error, response) => {
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " degrees out. It feels like " +
      response.body.current.feelslike +
      " degrees out."
  );
});

// Geocoding
// Address -> Latitude/Longitude -> Weather

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicGFsbGF2aWthcGlsYSIsImEiOiJja2gwamxrdDAxZWE4MzBycnAwbzQ4Yng3In0.ERq_2dOOGxLIKyeKJCL0Mg&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(latitude, longitude);
});
