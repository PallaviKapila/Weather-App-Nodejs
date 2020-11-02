const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=3ce24efb523d31ef441de308bd827fc4&query=37.8267,-122.4233";
/* "http://api.weatherstack.com/current?access_key=3ce24efb523d31ef441de308bd827fc4&query=&units=f";
  here this url will show error and units=f is used for temp in fahreneit
  */
request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        ". It is currently " +
        response.body.current.temperature +
        " degrees out. It feels like " +
        response.body.current.feelslike +
        " degrees out."
    );
  }
});

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Phagwara.json?access_token=pk.eyJ1IjoicGFsbGF2aWthcGlsYSIsImEiOiJja2gwamxrdDAxZWE4MzBycnAwbzQ4Yng3In0.ERq_2dOOGxLIKyeKJCL0Mg&limit=1";
// this url will show error as i removed phagwara and added 12 waht insread
//"https://api.mapbox.com/geocoding/v5/mapbox.places/12what.json?access_token=pk.eyJ1IjoicGFsbGF2aWthcGlsYSIsImEiOiJja2gwamxrdDAxZWE4MzBycnAwbzQ4Yng3In0.ERq_2dOOGxLIKyeKJCL0Mg&limit=1";
request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location services!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location, Try another search.");
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
  }
});
