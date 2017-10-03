var express = require('express');

// create app
var app = express();

// when you're working with node, this is how you access environment variables
// it defaults to 3000 for localhost where the port var doesn't exist
// use UPPERCASE when declaring a constant
const PORT = process.env.PORT || 3000;

// express middleware to check if http or https
// since weather API won't work over https, we need to check and replace it if it is
app.use(function (req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        // redirect if its on https
        res.redirect('http://' + req.hostname + req.url);
    } else {
        // otherwise continue
        next();
    }
});

// tell the server what directory to use
app.use(express.static('public'));

// start server listening on port 3000
app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
});