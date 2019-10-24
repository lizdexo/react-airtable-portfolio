
var Airtable = require('airtable');
var base = new Airtable({
  apiKey: 'key9O0ifLQ0zYDQIt',
}).base('appzdAcwHN5xEQO8y');
var tableName = 'Portfolio';
var viewName = 'Gallery';

var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

// Cache the records in case we get a lot of traffic.
// Otherwise, we'll hit Airtable's rate limit.
var cacheTimeoutMs = 5 * 1000; // Cache for 5 seconds.
var cachedResponse = null;
var cachedResponseDate = null;

app.get("/data", function(_, response) {
  if (cachedResponse && new Date() - cachedResponseDate < cacheTimeoutMs) {
    response.send(cachedResponse);
  } else {
    // Select the first 10 records from the view.
    base(tableName).select({
      maxRecords: 50,
      view: viewName,
    }).firstPage(function(error, records) {
      if (error) {
        response.send({error: error});
      } else {
        cachedResponse = {
          records: records.map(record => {
            return {
              name: record.get('Name'),
              picture: record.get('Cover'),
              tags: record.get('TagText2'),
              gallery: record.get('Attachments'),
            };
          }),
        };
        cachedResponseDate = new Date();
        
        response.send(cachedResponse);
      }
    });
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});