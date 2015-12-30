var express = require("express");
var app = express();
var middleware = require("./middleware.js");
var PORT = process.env.port || 3000; // process.env.port es el puerto de esucha de heroku

app.use(middleware.logger);

app.get("/about", middleware.requireAuthentication, function(req, res){
	res.send("About us");
});

app.use(express.static(__dirname + "/public"));

app.listen(PORT, function(){
	console.log("Servidor express arrancado en el puerto " + PORT);
});