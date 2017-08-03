

const {user} = require('../user.js');
//Functions to export to the end points!
module.exports = {
  getName(req,res,next) {
      console.log(user)
      res.status('200').json(user.name)


  }
  /*
  getLocation(req,res,next) {
      res.status('200').json(user.location)

  },
  getOccupations(req,res,next) {
      res.status('200').json(user.occupations)

  },
  getOccupationLatest(req,res,next) {
      res.status('200').json({"Latest Occupation": user.occupations[user.occupations.length-1]})
  },
  getHobbies(req,res,next) {
      res.status('200').json(user.hobbies);
  },
  getHobbiesByType(req,res,next) {
      console.log(req.params)
      const kitkats = user.hobbies.filter((x) => req.params.type.toLowerCase() === x.type.toLowerCase())
      res.status('200').json(kitkats);
  },
  getFamily(req,res,next) {
      res.status('200').json(user.family);
  },
  getFamilyByGender(req,res,next) {
      const katkat = user.family.filter((x)=> req.params.gender.toLowerCase() === x.gender.toLowerCase());
      res.status('200').json(katkat);

  },
  getRestaurants(req,res,next) {
      if(req.query.rating>0) {
          const kath = user.restaurants.filter((x)=> x.rating >=req.query.rating)
          res.status('200').json(kath)
          return;
      }
      res.status('200').json(user.restaurants)
  }
  */
}
