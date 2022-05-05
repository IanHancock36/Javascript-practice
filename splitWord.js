// Split 1st letter in sentence into a capital letter. 
    // Seperate every word into its own individual string
        // take the index of 0 of every word iterate through them using a map and add toUppercase
            // to every 1st letter.
                // take individual strings and join to one string. 


//1 . declare the sentence as a variable
// this converts the sentence into an array of strings where ever there is a blank space encountered
// no we have to loop through each element or iterate through the array and capitalize the first letter
const str = "i like adding capitals to the start of these words";
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const capitals = str.split(' ').map(capitalize).join(' ');
console.log(capitals)