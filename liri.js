var spotify = require('./spotify');
var concert = require('./band');
var movie = require('./movie')

var command = process.argv[2];
var value = process.argv.slice(3).join(" ");
console.log(value);

if (command === "concert-this") {
    concert.getBandInfo(value)
    console.log(value);
} else if (command === "spotify-this-song") {
    spotify.getSongInfo(value);
} else if (command === "movie-this") {
    movie.getMovieInfo(value);
} else if (command === "do-what-it-says") {
    console.log(value);
}

function log(input) {
    fs.appendFile("log.txt", input, function (error) {
        if (error) {
            console.log(error);
        }
    });
}