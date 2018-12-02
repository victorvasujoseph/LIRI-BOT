var spotify = require('./spotify');
var concert = require('./band');
var movie = require('./movie');
var logger = require('./logger');
var fs = require("fs");

var command = process.argv[2];
var value = process.argv.slice(3).join(" ");

logger.logInput(`${command} : ${value} \n`);

if (command === "concert-this") {
    concert.getBandInfo(value);
} else if (command === "spotify-this-song") {
    spotify.getSongInfo(value);
} else if (command === "movie-this") {
    movie.getMovieInfo(value);
} else if (command === "do-what-it-says") {
    doWhatItSays();
}


function doWhatItSays() {
    
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            console.log("Error : " + error);
            return error;
        } else {
            var data = data.split(",");

            logger.logInput(`${data} \n`);

            if (data[0] === "concert-this") {
                concert.getBandInfo(data[1]);
            } else if (data[0] === "spotify-this-song") {
                spotify.getSongInfo(data[1]);
            } else if (data[0] === "movie-this") {
                movie.getMovieInfo(data[1]);
            }
        }
    });
}
