
const {user} = require('../user.js');
const {skillz} = require('../skillz.js');
const {secrets} = require('../secrets.js');
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

  changeName(req,res){
      console.log(req.body.name)
      user.name = req.body
      console.log(user.name)
      return res.status(200).json(user.name)
  },
  changeLocation(req,res){
      console.log(req.body.location)
      user.location = req.body
      console.log(user.location)
      return res.status(200).json(user.location)
  },
  postHobbies(req,res){
    console.log(req.body)
    if(req.body.name && req.body.type){
      user.hobbies.push(req.body)
      return res.status(200).json(user.hobbies)
    }
    else{
      return res.status(200).json("Provide name and type of hobby")
    }
  },
  postOccupations(req,res){
    console.log(req.body)
    if(req.body.occupations){
      user.occupations.push(req.body.occupations)
      return res.status(200).json(user.occupations)
    }
    else{
      return res.status(200).json("Provide Occupation")
    }
  },
  postFamily(req,res){
    console.log(req.body)
    if(req.body.name && req.body.relation && req.body.gender){
      user.family.push(req.body)
      return res.status(200).json(user.family)
    }
    else{
      return res.status(200).json("Provide name, relation, and gender of family member")
    }
  },
  postRestaurants(req,res){
    if(req.body.name && req.body.type && req.body.rating){
      console.log(user.restaurants)
      user.restaurants.push(req.body)
      return res.status(200).json(user.restaurants)
    }
    else{
      return res.status(200).json("Provide name, type, and rating of restaurant")
    }
  },
  getSkillz(req,res,next){
    console.log(req.query)
      if(req.query.experience) {
          const skill = skillz.filter((val)=> val.experience.toLowerCase() == req.query.experience.toLowerCase())
          console.log(skill)
          return res.status('200').json(skill)
      }
      console.log(skillz)
      return res.status(200).json(skillz)
  },
  postSkillz(req,res){
    console.log(req.body)
    if(req.body.name && req.body.experience ){
      skillz.push(req.body)
      return res.status(200).json(skillz)
    }
    else{
      return res.status(200).json("Provide New Skill with id, name, and experience")
    }
  },
  getSecrets(req,res,next){
      console.log(secrets)
      return res.status(200).json({"Secrets":secrets})
  }

}
