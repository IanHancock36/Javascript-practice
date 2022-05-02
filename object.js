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



// Returning all the keys in the users object array 
   let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {

  return Object.keys(obj);

}


// adding to an existing array. 
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA"
    }
  }
};

function addFriend(userObj, friend) {

  userObj.data.friends.push(friend);
  return userObj.data.friends;

}

console.log(addFriend(user, "Pete"));

// to add the friend we drill down into the object into the friends array 
  // using userObj.data.friends 
    // we use array.push method to add a new friend and that is second parameter 
     // so we can define later calling our addFriend function 
      // giving flexibility to call friend anythin we want 
        // we return the userObj or User Object friends array. 
          // we can now call addFriend in the "user" object and add "Pete" to the end
            // of the friends array. 