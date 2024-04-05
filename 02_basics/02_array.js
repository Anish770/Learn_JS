const fruits=["apple","banana","pineapple"]
const veggies=["brocolli","eegplant","spinach"]
console.log(fruits)
// fruits.push(veggies)//adds the 2nd array as 2d
const new_combo=fruits.concat(veggies)//merges the both the arrays
const another_combo=[...fruits,...veggies,...new_combo]//spread out operator
console.log(another_combo)
const newArrays1=[1,2,[3,4],5,6,[7,8,[9],10]]
const newArrays2=newArrays1.flat(3)
console.log(newArrays2)
console.log(Array.isArray("Anish"))
console.log(Array.from("Anish"))
let point1=100
let point2=200
let point3=300
console.log(Array.of(point1,point2,point3))