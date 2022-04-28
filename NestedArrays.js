let nestedArray = [
    ['deep'],
    [ ['deeper'], ['deeper'] ],
    [[['deepest'], ['deepest']],
      [[['deepest-est?']]]]
  ];
 nestedArray[2][1][0][0][0]='I like bannans'
// going into second array index of 1  which is the deepest array [2][1]
  console.log(nestedArray[2][1][0][0][0])


  // key values pairs 

  const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };
  // this adds the key value pair not in string but in variable form
  tekkenCharacter.origin = 'South Korea';
  // if you want the key value pair in string form must use bracket notation
  tekkenCharacter['hair color'] = 'blue'

//   this will add the pair in string format below 'hair color' :'blue'
// {
//     player: 'Hwoarang',
//     fightingStyle: 'Tae Kwon Doe',
//     human: true,
//     origin: 'South Korea',
//     'hair color': 'blue'
//   }

  console.log(tekkenCharacter)


  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Only change code below this line
  foods.bananas = 13
  foods.grapes = 35
  foods.strawberries = 27
  // Only change code above this line
  
  console.log(foods);

// accessing nested data 

let userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  };
  
  // Only change code below this line
  userActivity.data.online = 45
  // Only change code above this line
  
  console.log(userActivity);



  // drilling down in a object
  let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {

   return foods[scannedItem]

  }
  
  console.log(checkInventory("apples"));
