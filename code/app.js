const express = require('express');
const app = express();
var path = require('path');
const Aftership = require('aftership')('5ab23caf-1ec8-4448-bf67-ed561d090cbe');

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname + '/flash_listing.html'))
);

app.get('/requestHomePage', function(req, res) {
  Aftership.call('GET', '/trackings/dhl/7303858800')
    .then(function(result) {
      res.send(result);
      // console.log('tarun ', result);
    })
    .catch(function(err) {
      res.send(err);
      // console.log('gupta ', err);
    });
});

app.get('/requestHomePage2', function(req, res) {
  Aftership.call('GET', '/trackings/dhl/7303858801')
    .then(function(result) {
      res.send(result);
      // console.log('tarun ', result);
    })
    .catch(function(err) {
      res.send(err);
      // console.log('gupta ', err);
    });
});

app.get('/requestHomePage3', function(req, res) {
  Aftership.call('GET', '/trackings/dhl/7303858802')
    .then(function(result) {
      res.send(result);
      // console.log('tarun ', result);
    })
    .catch(function(err) {
      res.send(err);
      // console.log('gupta ', err);
    });
});

app.get('/requestHomePage4', function(req, res) {
  Aftership.call('GET', '/trackings/dhl/7303858803')
    .then(function(result) {
      res.send(result);
      // console.log('tarun ', result);
    })
    .catch(function(err) {
      res.send(err);
      // console.log('gupta ', err);
    });
});

app.get('/requestHomePage5', function(req, res) {
  Aftership.call('GET', '/trackings/dhl/7303858804')
    .then(function(result) {
      res.send(result);
      // console.log('tarun ', result);
    })
    .catch(function(err) {
      res.send(err);
      // console.log('gupta ', err);
    });
});

app.get('/request', function(req, res) {
  Aftership.call('POST', '/trackings', {
    body: {
      tracking: {
        slug: 'dhl',
        tracking_number: '7303858793',
        title: 'Hello Title',
        smses: ['+919873647011', '+918527474884'],
        emails: ['tarungupta16891@gmail.com'],
        custom_fields: {
          product_name: 'iPhone Case',
          product_price: 'USD19.99',
        },
      },
    },
  })
    .then(function(result) {
      res.send(result);
      // console.log('tarun ', result);
    })
    .catch(function(err) {
      res.send(err);
      // console.log('gupta ', err);
    });
});

app.use(express.static(__dirname + '/'));

app.listen(8000, () => console.log('Example app listening on port 8000!'));
