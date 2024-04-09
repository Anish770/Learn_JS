//global scope
// let a=300 
// if(true)
// {//block scope starts here
//     let a=10
//     // var b=20
//     const c=30
// }//block scope ends here
// var b=300
// console.log(a)
// console.log(b)
// console.log(c)
function one()
{
    const username="anish"
    function two()
    {
        website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()
console.log(addone(5))
function addone(num)//method 1
{
    return num+1
}
console.log(addTwo(5))
const addTwo=function(num)//method 2
{
    return num+2
}
