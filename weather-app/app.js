const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=3ce24efb523d31ef441de308bd827fc4&query=37.8267,-122.4233&units=f";
request({ url: url, json: true }, (error, response) => {
  console.log(
    "It is currently " +
      response.body.current.temperature +
      " degrees out. It feels like " +
      response.body.current.feelslike +
      " degrees out."
  );
});
