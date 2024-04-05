// const insta_user=new Object()
const insta_user={
}
insta_user.id="1262sd"
insta_user.name="anish"
insta_user.isLoggedIn=false
console.log( insta_user)
const regular_user={
    Email:"example@gmail.com",
    UserFullName:{
        FirstName:"Anish",
        LastName:"Chettri"
    }
}
console.log(regular_user.UserFullName?.FirstName)
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj={obj1,obj2}//method 1
const obj=Object.assign({},obj1,obj2)//for merging the objects //method 2
const obj3={...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(insta_user))
console.log(Object.values(insta_user))
console.log(Object.entries(insta_user))
console.log(insta_user.hasOwnProperty('name'))

const course={
    coursename:"JS",
    price:999,
    trainer:"anish"
}
const {trainer: tch}=course
console.log(tch)