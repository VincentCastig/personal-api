

const {user} = require('../user.js');
//Functions to export to the end points!
module.exports = {
  getName(req,res,next) {
      return res.status('200').json({"Name": user.name})

  },

  getLocation(req,res,next) {
      return res.status('200').json({"Location":user.location})

  },
  getOccupations(req,res,next) {
      return res.status('200').json(user.occupations)

  },
  getOccupationLatest(req,res,next) {
      return res.status('200').json({"Latest Occupation": user.occupations[user.occupations.length-1]})

  },
  getHobbies(req,res,next) {
      return res.status('200').json({"Hobbies":user.hobbies});
  },
  getHobbiesByType(req,res,next) {
      console.log('PARAMS: ',  req.params.type);
      const hobby = user.hobbies.filter((val) => val.type.toLowerCase() === req.params.type.toLowerCase())
      return res.status('200').json({"Hobbies": hobby});
      console.log(hobby);
  },
  getFamily(req,res,next) {
      return res.status('200').json({"family": user.family});
  },
  getFamilyByGender(req,res,next) {
    console.log('PARAMS: ',  req.params.gender);
      const fam = user.family.filter((val)=> val.gender.toLowerCase() === req.params.gender.toLowerCase());
      return res.status('200').json({"family": fam});

  },
  getRestaurants(req,res,next) {
    console.log(req.query.rating)
      if(req.query.rating >= 2) {
          const rest = user.restaurants.filter((val)=> val.rating >=req.query.rating)
          console.log(rest)
          return res.status('200').json({"restaurants":rest})

      }
      else{
        return res.status('200').json(user.restaurants)
      }
  },

  getRestaurantsByName(req,res,next) {
      console.log('PARAMS: ',  req.params.name);
      const restName = user.restaurants.filter((val) => val.name.toLowerCase() === req.params.name.toLowerCase())
      return res.status('200').json({"Hobbies": restName});
      console.log(restName);
  },

  postName(req,res){

      user.name.push(req.query)
      return res.status(200).json(user.name)
    
  }

}
