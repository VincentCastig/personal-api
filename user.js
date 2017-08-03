const user = {
  name: "Vincent",
  location: "Dallas",
  occupations: ["scuba instructer", 'welder', 'programmer'],
  hobbies: [
    {
      name: 'golf',
      type: 'sport'
    },
    {
      name: 'fishing',
      type: 'sport'
    },
    {
      name: 'weight-lifting',
      type: 'exercise'
    }
  ],
  family: [
    {
      name: 'Todd',
      relation: 'brother-in-law',
      gender: 'male'
    },
    {
      name: 'steven',
      relation: 'cousin',
      gender: 'female'
    },{
      name: 'Harry',
      relation: 'neice',
      gender: 'male'
    }
  ],
  restaurants: [
    {
      name: "adrian's",
      type: 'seafood',
      rating: 5
    },
    {
      name: 'Chef Scott',
      type: 'sushi',
      rating: 4
    },
    {
      name: 'sonic',
      type: 'fast-food',
      rating: 1
    }
  ]
};
module.exports = {
  user:user
};
