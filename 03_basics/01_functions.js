function sayMyName()
{
    console.log("A")
    console.log("N")
    console.log("I")
    console.log("S")
    console.log("H")
}
sayMyName()
function addTwoNumbers(number1,number2)
{
    console.log(number1+number2)
}
function addTwoNumbers(number1,number2)
{
    return number1+number2
}
const res=addTwoNumbers(15,16)
console.log(res)

function loginMessage(username="zen")//default value
{
    if(username===undefined)
    {
        return `Please enter a username`
    }
    return`${username} just logged in`
}
const message=loginMessage()
console.log(message)

function calculateCartPrice(val1,val2,...num1)
{
    return num1
}
console.log(calculateCartPrice(200,100,500,800))
const user={
    name:"Anish",
    price:1600,
}
function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.name} and the price is ${anyobject.price}`)
}
handleObject(user)
const priceArray=[100,200,300,400]
function returnsecondval(array)
{
    return array[1]
}
console.log(returnsecondval(priceArray))
