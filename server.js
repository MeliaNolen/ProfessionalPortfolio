var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 3000;

var app = express();

// Set up static server
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, function() {
    console.log("Listening on http://localhost:" + PORT);
});