var mongoose = require("mongoose");
var Tweetmodel = require('./tweetermodel');
var twet;

Tweetmodel.find({
}, function (err, result) {
    if(err){
        throw err;
    }    
    else{
    for (var i = 0; i < result.length; i++) {
        twet+= result[i].tweet;
        
        }
    document.getElementById("alltweet").innerHTML = twet;
    }
})