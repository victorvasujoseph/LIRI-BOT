var axios = require('axios');
var encode = require('urlencode');

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

      console.log(`venue : ${venue.name}`);
      console.log(`location : ${venue.country},${venue.city} - ${venue.region}`);
    })

    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  getBandInfo
};
