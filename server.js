const express = require('express');
const {json} = require('body-parser');
const port = 3000;
const app = express();
const middleware = require('./controllers/middleware')
const mainCtrl = require('./controllers/mainCtrl')


app.use(json())
app.use(middleware.addHeaders);

app.get('/api/name', mainCtrl.getName);
app.get('/api/location', mainCtrl.getLocation)
app.get('/api/occupations', mainCtrl.getOccupations)
app.get('/api/occupations/latest', mainCtrl.getOccupationLatest)
app.get('/api/hobbies', mainCtrl.getHobbies)
app.get('/api/hobbies/:type', mainCtrl.getHobbiesByType)
app.get('/api/family', mainCtrl.getFamily)
app.get('/api/family/:gender', mainCtrl.getFamilyByGender)
app.get('/api/restaurants', mainCtrl.getRestaurants)
app.get('/api/restaurants/:name', mainCtrl.getRestaurantsByName)
app.put('/api/name', mainCtrl.changeName);
app.put('/api/location', mainCtrl.changeLocation);
app.post('/api/hobbies', mainCtrl.postHobbies);
app.post('/api/occupations', mainCtrl.postOccupations);
app.post('/api/family', mainCtrl.postFamily);
app.post('/api/restaurants', mainCtrl.postRestaurants);

app.get('/api/skillz', mainCtrl.getSkillz);
app.post('/api/skillz', middleware.generateId, mainCtrl.postSkillz);

app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);


app.listen(port, function(){
  console.log(`Dude, I'm Listening on port ${port}. `)
})
