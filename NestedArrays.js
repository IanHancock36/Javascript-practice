let nestedArray = [
    ['deep'],
    [ ['deeper'], ['deeper'] ],
    [[['deepest'], ['deepest']],
      [[['deepest-est?']]]]
  ];
 nestedArray[2][1][0][0][0]='I like bannans'
// going into second array index of 1  which is the deepest array [2][1]
  console.log(nestedArray[2][1][0][0][0])