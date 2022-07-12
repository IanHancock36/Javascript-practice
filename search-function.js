function factorialize(number) {
  if (number === 0) {
    return 1;
  } else {
    return number * factorialize(number - 1);
  }
}
factorialize(5);

// factoralizing a number is taking all the integers leading up to that number
// 5 would equal = 1*2*3*4*5 = 120

// this will create a loop until it cycles through the number until it hits 1
// 5,4,3,2,1

// example
//5   * 4 = 20
//20  * 3 = 60
//60  * 2 = 120
//120 * 1 = 120

// longest word in string
function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = 0;
  console.log("PICKLES", words.length);
  // length is 9
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      console.log("BLUEBERRIES", words[i]);
      maxLength = words[i].length;
    }
  }
  return maxLength;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
