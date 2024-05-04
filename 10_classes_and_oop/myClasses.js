// class User{
//     constructor(username,email,password)
//     {
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword()
//     {
//         return `${this.password}abc`
//     }
//     changeUserName()
//     {
//         return `${this.username.toUpperCase()}`
//     }
// }
// const user1=new User('anish','anish@770','zen')
// console.log(user1.encryptPassword());
// console.log(user1.changeUserName());

function User1(username,email,password) {
    this.username=username
    this.email=email
    this.password=password
}

User1.prototype.encryptPassword=function () {
    return `${this.password}abcd`
}

const user2=new User1('zen','abc@gmail.com','456')
console.log(user2);
console.log(user2.encryptPassword());