const request = require("request");

const forecast = () => {};
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

module.exports = forecast;
