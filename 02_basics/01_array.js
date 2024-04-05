const myArray1=[1,2,3,4,5]
const myArray2=["ani","ish","che","tt","ri"]
// console.log(myArray1)
console.log(myArray2)
myArray2.push(9)
console.log(myArray2)
console.log(myArray2[myArray2.length-1])
console.log(typeof myArray2[myArray2.length-1])
console.log(typeof myArray2[myArray2.length-2])
myArray1.unshift(9)
myArray1.unshift(9)
myArray1.shift()
myArray1.shift(9)
console.log(myArray1.includes(5))
console.log(myArray1.indexOf(3))
console.log(myArray1)
const newArray=myArray1.join()//converts array to string 
console.log(newArray)
//slice splice
console.log("A",myArray1)
console.log(myArray1.slice(1,3))
console.log("B",myArray1)
console.log(myArray1.splice(1,3))
console.log("C",myArray1)