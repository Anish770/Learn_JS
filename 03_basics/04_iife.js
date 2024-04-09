//Immediately Invoked Function Expressions
(function Immediate()//named iife
{
    console.log("DB Connected succesfully")//directly executes the function //it's used to remove the pollution of global scope variables
})();//semicolon is needed to stop the iife

((name)=>{// with arrow function// simple or unnamed iife
    console.log(`Welcome ${name}`)
})("anish");