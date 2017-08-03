const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
var app = express()
var middleware = require('./controllers/middleware.js')
var mainCtrl = require('./controllers/mainCtrl.js')


app.use(bodyParser.json())
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName)
mainCtrl.getName()
app.get('/location', mainCtrl.getLocation)
app.get('/occupations', mainCtrl.getOccupations)
app.get('/occupations/latest', mainCtrl.getOccupationLatest)

app.get('/hobbies', mainCtrl.getHobbies)

app.get('/hobbies/:type', mainCtrl.getHobby)

app.get('/family', mainCtrl.getFamily)
app.get('/family/:gender', mainCtrl.getFamily)
app.get('/restaurants', mainCtrl.getRestaurants)
app.get('/restaurants/:name', mainCtrl.getRestaurants)


app.get('/messages', function(req, res, next) {
  res.status(200).json({messages:messages});

});


app.listen(port, function(){
  console.log(`Dude, I'm Listening on port ${port}. `)
})
