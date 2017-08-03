const {user} = require('../user.js')
const {skillz} = require('../skillz.js');
const {secret} = require('../secrets.js');

module.exports = {

addHeaders: function(req, res, next){
  res.status(200).set({
    'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'X-XSS-Protection': '1; mode=block',
      'X-Frame-Options': 'SAMEORIGIN',
      'Content-Security-Policy': "default-src 'self' devmountain.github.io"
    })

  next();
},
  generateId: function(req, res, next){
        var id = skillz.length + 1;
        req.body.id = id;
        next();
    },
  verifyUser: function(req, res, next){
    console.log(req.params)
        if(req.params.username == "john" && req.params.pin == 4){
        next();
      }
      else{
      return res.status(200).json("incorrect username and password")
    }
  }
}
