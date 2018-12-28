var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tetsingapp');
mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
var Usermodel = require('./usersmodel');

var Tweetmodel = require('./tweetermodel');

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/login.html");
});
var nm, pass;
app.post('/login', (req, res) => {
	nm = req.body.name;
	pass = req.body.password;

	var authsuccess = false;

	Usermodel.find({
	}, function (err, result) {

		for (var i = 0; i < result.length; i++) {

			if (result[i].name == nm && result[i].password == pass) {
				authsuccess = true;
			}
		}

		if (authsuccess) {
			res.sendFile(__dirname + "/tweeter.html");

		}
		else {
			res.send('authentication failed');
		}

	})
});

app.get('/frame', (req, res) => {
	var twet="";

	Tweetmodel.find({
	}, function (err, result) {
		if (err) {
			throw err;
		}
		else {
			for (var i = 0; i < result.length; i++) {

				twet = twet + result[i].name +  " : " + result[i].tweet +"<br>";

			}
			res.send(twet);
		}
	})
})


app.post('/addtweet', (req, res) => {

	var addtweet = new Tweetmodel({
		'name': nm,
		'tweet': req.body.tweet
	}).save(function (err, result) {
		if (err) {
			throw err;
		}
		else {
			
		}
	})

	res.sendFile(__dirname + "/tweeter.html")

})





var port = 1234;
app.listen(port, () => {
	console.log('Server is up and running on port numner ' + port);
});


