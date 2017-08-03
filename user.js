const user = {
  name: "Vincent",
  location: "Dallas",
  occupations: ['scuba instructer, welder, programmer'],
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
      name: 'hunting',
      type: 'sport'
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
      gender: 'N/A'
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
      rating: 2
    }
  ]
};
module.exports = user;
