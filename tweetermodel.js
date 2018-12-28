var mongoose = require("mongoose");
var TweetSchema = new mongoose.Schema({
     name:String,    
     tweet: String
}); 
module.exports = mongoose.model("tweet",TweetSchema);
