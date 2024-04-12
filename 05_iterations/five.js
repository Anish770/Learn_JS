//forEach
const coding=["js","ruby","python","sql","html"]
// coding.forEach( function (item) {//method 1
//     console.log(item);
// })//callback function doesn't allow function name in the function and the creation of the function is required 
// console.log();

// coding.forEach((item)=>{//method 2
//     console.log(item);
// })

// function printMe(item)//method 3
// {
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{//method 4 elements ,idnex and the the whole arraylist can be fetched bcs it's already available in 2nd and 3rd parameter
    console.log(item,index,arr);
})
 const myCoding=[
    {
        language:"js",
        filename:".js"
    },
    {
        language:"java",
        filename:".java"
    },
    {
        language:"python",
        filename:".py"
    }
 ]
 myCoding.forEach((object)=>{// iterating objects inside an array
    console.log(object.language);
    console.log(object.filename);
 })