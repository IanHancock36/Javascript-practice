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

