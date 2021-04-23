const request = require("request");

var getLocation = (loc, callback) => {
  var encodedLocation = encodeURIComponent(loc);

  request(
    {
      uri: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedLocation}&key=APIKEY`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect");
      } else if (body.status === "ZERO_RESULTS") {
        callback("Unable to find location");
      } else if (body.status === "OK") {
        callback(undefined, {
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    }
  );
};

module.exports = { getLocation };