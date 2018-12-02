var axios = require('axios');
var encode = require('urlencode');

var getMovieInfo = function(movie){

    if (movie === undefined || movie.length === 0) {
        movie = "Mr Nobody";
    }

    movie = encode(movie);
    url = `http://www.omdbapi.com/?t=${movie}&y=&plot=short&apikey=trilogy`;

    axios
    .get(url)
    .then(response => {
        var data = response.data;
        var title = data.Title;
        var releaseYear = data.Year;
        var IMDBrating = data.imdbRating;
        var rottenTomatoeRating = data.Ratings[1].Value;
        var country = data.Country;
        var language = data.Language;
        var plot = data.Plot;
        var actors = data.Actors;

        console.log(`Title : ${title}, Release Year : ${releaseYear}, ${IMDBrating}, ${rottenTomatoeRating}, ${country}, ${language}, ${plot}, ${actors}`);
    })
    .catch(err => {
      console.log(err);
    });

}

module.exports = {
    getMovieInfo
}