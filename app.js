var express = require('express');
var app = express();
const base = require('airtable').base('appJ8ejuCU991XIi1'); //maybe change this

app.get('/', function (req, res) {
  res.send({
    "type": "text",
    "text": "A quick simple text to be replaced. ",
    "buttons": [{
      "type": "url",
      "caption": "External link",
      "url": "https://manychat.com"
    }]
  });
});

app.get('/episode/:epi', (req, res) => {
  console.log("Looking for episode", req.params.epi);
  base('Table 1').find(req.params.epi, function (err, record) {
    if (err) {
      console.error(err);
      res.send(err);
    } else {
      console.log(record);
      res.send({
        "type": "text",
        "text": record.fields.Title
      });
    }
  });


});

app.post('/', function (req, res) {
  res.send({
    "Output": "Not implemented!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app