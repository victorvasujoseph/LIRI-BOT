require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require('./keys')
 
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

        console.log('Artist : ' + artist); 
        console.log('Song Name : ' + name); 
        console.log('Song Preview : ' + preview);
        console.log('Album : ' + albumName);

    })
    .catch(function(err) {
        console.log(err);
    });

}   

module.exports = {
    getSongInfo
}