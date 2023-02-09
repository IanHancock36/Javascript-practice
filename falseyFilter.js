// remove all falsey values and return the array 
// Javascript Boolean method returns the Boolean for a value
// iterate or loop through each item with a filter 
// taking the boolean 
function bouncer(arr) {
    return arr.filter(Boolean)
}
console.log(bouncer([7, "ate", "", false, 9]));
function length<T>(arr: T[]): number {
    return arr.length;
  }