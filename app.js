var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "type": "text",
    "text": "A quick simple text to be replaced. ",
    "buttons": [
         {
             "type": "url",
             "caption": "External link",
             "url": "https://manychat.com"
         }
    ]
 });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Not implemented!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
