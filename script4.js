// map cycles through an array and creates a totally new array. 


// const prices = [20,10,30,25,15,40,80,5]

// const salePrices = prices.map(price => price /2 )

// console.log(salePrices)

// 

// reduce method

// the 'acc' is like a running total accumlate values and edit it.
// 
// const scores = [10,20,30,40,60,70,90]

// const result = scores.reduce((acc,curr)=> {
//     if (curr > 50 ){
//         acc++
//     }
//     return acc;
// },0)

// console.log(result)50


// const scores =[
//     {player: 'jim', score: 75},
//     {player: 'shawn', score: 90 },
//     {player: 'dwight', score: 90 },
//     {player: 'rick', score: 30 },
//     {player: 'jim', score: 100},
// ]

// const jimTotal = scores.reduce((acc,curr)=>{
//  if (curr.player === 'jim'){
//      acc += curr.score 
//  }
//  return acc;
// },0)

// console.log(jimTotal)


// Comparison function 
// circle of concerns 

const people = [
    {name: 'eddie' ,height:'72in' ,weight:'150'},
    {name:'steve' ,height: '62in',weight:'200'},
    {name:'joe' ,height: '60in' ,weight:'100'},
    
]

const byHeight = people.sort((a,b)=>{
    return a.weight -b.weight
})
console.log(byHeight)