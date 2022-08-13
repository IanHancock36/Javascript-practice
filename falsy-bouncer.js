//There are only six falsey values in JavaScript:
// undefined, null, NaN, 0, "" (empty string), and false of course.
function bouncer(array){
    return array.filter(elements => Boolean(elements))
  }
  console.log(bouncer([7, "ate", "", false, 9]));
  
  // in this function you take the Boolean() js method if you need to check if it is true or false. 
  // filter is great use case it will remove all the false
  //values from the array
  // this will iterate through all the elements in the 
  ////array and check each one if it is true or false 
  // and remove all the false ones 
  
  // also you could use the !Boolean potentially to see all data that renders false
  //[ '', false ] would return. 
  