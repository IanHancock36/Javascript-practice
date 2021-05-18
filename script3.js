//filter array practice 


const scores =[10,30,15,25,50,40,5]
// store this in a variable because it is non destructive to original array since its in a const 
// you must make a new variable for scores.
// const filterScores = scores.filter((score)=> {
//     return score > 20; 
   
// })

// console.log(filterScores)


const users = [
    {name: 'Ian', premium : false },
    {name: 'Joe', premium : true }
]

const premiumUsers = users.filter(user => user.premium
)

console.log(premiumUsers)