require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

// Initializing Spotify API client
var spotify = new Spotify(keys.spotify);


var command = process.argv[2];

// Function which takes in command line arguments and executes correct function accordingly
var runThis = function (argOne, argTwo) {
    pick(argOne, argTwo);
};

// MAIN PROCESS
// =====================================
runThis(process.argv[2], process.argv.slice(3).join(" "));

// * `concert-this`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`git