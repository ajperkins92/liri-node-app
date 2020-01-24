require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs")

var command = process.argv[2];

if (process.argv.length > 3) {
    var input = process.argv.slice(3).join(" ");
    console.log(input);
}

// * `concert-this`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`git