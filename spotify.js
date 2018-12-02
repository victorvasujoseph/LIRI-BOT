require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require('./keys');
var logger = require('./logger');
 
var spotify = new Spotify(keys.spotify);

var getSongInfo = function(track){

    /* Default Song */
    if(track === undefined || track.length === 0 ){
        track = 'Sign of the Times';
    }

    spotify.search({ type: 'track', query: track })
    .then(function(response) {

        var song = response.tracks.items[0];
        var artist = song.artists[0].name;
        var name = song.name;
        var preview = song.preview_url;
        var albumName = song.album.name;
        
        var result = ` \n Artist : ${artist} \n
        Song Name : ${name} \n
        Song Preview : ${preview} \n
        Album : albumName \n`;

        logger.logInput(result);
        logger.logPartition();
        console.log(result);

    })
    .catch(function(err) {
        console.log(err);
    });

}   

module.exports = {
    getSongInfo
}