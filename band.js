var axios = require('axios');
var encode = require('urlencode');
var moment = require('moment');
var logger = require('./logger');

var getBandInfo = function(artist) {
  if (artist === undefined || artist.length === 0) {
    artist = "Maroon 5";
  }

  artist = encode(artist);
  url = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;

  axios
    .get(url)
    .then(response => {
      var data = response.data[0];
      var venue = data.venue;
      var dateTime = moment(data.datetime);

      var result = ` \n venue : ${venue.name} \n
      location : ${venue.country},${venue.city} - ${venue.region} \n
      date : ${dateTime} \n`;

      console.log(result);
      logger.logInput(result);
      logger.logPartition();


    })

    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  getBandInfo
};
