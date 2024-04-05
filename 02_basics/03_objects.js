const mySym=Symbol("key1")
const user={
    "name": "Anish",
    [mySym]:"mykey",
    "full_name":"Anish Chettri",
    age:21,
    city:"Gangtok",
    Email:"anish@gmail.com",
    isLoggedIn:false
}
// console.log(user.name)
// console.log(user["name"])
// console.log(user.full_name)
// console.log(user[mySym])
// user.Email="zenxd770@yahoo.com"
// Object.freeze(user)//doesn't allows to changes the values inside the object
// user.Email="anish@gmail.com"
// console.log(user)

user.greeting=function()
{
    console.log("Welcome user")
}
user.greeting_two=function()
{
    console.log(`hello ${this.name}`)
}
console.log(user.greeting())
console.log(user.greeting_two())