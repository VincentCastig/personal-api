

const {user} = require('../user.js');
//Functions to export to the end points!
module.exports = {
  getName(req,res,next) {
      res.status('200').json({"Name": user.name})

  },

  getLocation(req,res,next) {
      res.status('200').json({"Location":user.location})

  },
  getOccupations(req,res,next) {
      res.status('200').json(user.occupations)

  },
  getOccupationLatest(req,res,next) {
      res.status('200').json({"Latest Occupation": user.occupations[user.occupations.length-1]})

  },
  getHobbies(req,res,next) {
      res.status('200').json({"Hobbies":user.hobbies});
  },
  getHobbiesByType(req,res,next) {
      console.log('PARAMS: ',  req.params.type);
      const hobby = user.hobbies.filter((val) => req.params.type.toLowerCase() === val.type.toLowerCase())
      res.status('200').json(hobby);
      console.log(hobby);
  },
  getFamily(req,res,next) {
      res.status('200').json(user.family);
  },
  getFamilyByGender(req,res,next) {
    console.log('PARAMS: ',  req.params.type);
      const fam = user.family.filter((val)=> req.params.gender.toLowerCase() === val.gender.toLowerCase());
      res.status('200').json(fam);

  }/*,
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
