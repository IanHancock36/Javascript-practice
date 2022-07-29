function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";

  for (let i = 0; i < num; i++) {
    accumulatedStr += str;
  }

  return accumulatedStr;
}

repeatStringNumTimes("I like turtles", 3);

console.log(repeatStringNumTimes("I like turtles, ", 3));
