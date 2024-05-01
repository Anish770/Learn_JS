const user={
    username:'Anish',
    logInCount:'8',
    signIn: true,
    getUserDetails: function () {
        console.log('User got from Database');
        console.log(`User_Name: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.getUserDetails());
// console.log(this);
function User(username,logInCount,signIn) {
    this.username=username
    this.logInCount=logInCount
    this.signIn=signIn
    // this.greetings= function () {
    //     console.log(`Welcome ${this.username}`);
    // }
    return this
}
const userOne= new User('anish',9,true)
const userTwo= new User('satish',10,false)
console.log('This is userOne',userOne);
console.log('This is userTwo',userTwo);
// console.log(User());

//* new keyword creates a empty object known as instance and creates a new object (Step 1)
//* new keyword calls the constructor function and it packs the arguement and gives it as a output(Step 2)
//* this keyword injects all the arguement in the variables
//* gives the output 