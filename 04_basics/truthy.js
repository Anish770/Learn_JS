const userEmail=[]
if(userEmail)
{
    console.log("welcome user")
}
else{
    console.log("please try again ")
}
// falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy values
// true,1,"0",'false'," ",[],{},function(){}
const emptyObj={}
if(Object.keys(emptyObj).length===0)
{
    console.log("empty")
}
//Nullish Coalescing Operator(??) null undefined
let val1;
// val1=5??10//=>5
val1= null??undefined??10
console.log(val1)
// ternary operator
// condition ?true:false//syntax
const icecream=100
icecream<=80?console.log("less than 80"):console.log("more than 80")