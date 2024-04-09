const user={
    username:"Anish",
    price:999,
    message:function()
    {
        console.log(`${this.username}, Welcome to our website`)
        console.log(this)
    }
}
// console.log(user)
user.message()
user.username="zen"
user.message()
function gg()
{
    console.log(this)
}
// gg()
const chai=()=>{
    console.log(this)
}
chai()
const addnum=(num1,num2)=>{//explicit return//method 1
    return num1+num2
}
console.log(addnum(5,3))
const addnum1=(num1,num2)=> (num1+num2)//implicit return//method 2

console.log(addnum1(5,3));