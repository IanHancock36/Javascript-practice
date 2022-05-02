// finding values in an object. 

      // 
      let users = {
        Alan: {
          age: 27,
          online: true
        },
        Jeff: {
          age: 32,
          online: true
        },
        Sarah: {
          age: 48,
          online: true
        },
        Ryan: {
          age: 19,
          online: true
        }
      };
      
      function isEveryoneHere(userObj) {
       
        if (
          userObj.hasOwnProperty("Alan") &&
          userObj.hasOwnProperty("Jeff") &&
          userObj.hasOwnProperty("Sarah") &&
          userObj.hasOwnProperty("Ryan")
        ) {
          return true;
        }
        return false;
      }


       let dudes = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(dudesObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name => dudesObj.hasOwnProperty(name));
}

//Uses an array with all of the names which should be present in the object.
//The every method is used to validate all of names used in conjunction with the hasOwnProperty method result in a value of true being returned during each iteration.
//If at least one name is not found using the hasOwnProperty method, the every method returns false.



// Iterate Through the Keys of an Object with a for...in Statement

// using for let user in user (sim to a map)

const people = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
function countOnline(peopleObj) {
  let result = 0;
  for (let person in peopleObj) 
  peopleObj[person].online === true ? result++ : false
  return result;
}

// you are iterating through all users and checking is single person is online
  // you have go into peopleObj and then one level down person and check if online strictly === true
    // if true add to the count of online people if not return false
      // we want to return the count/result