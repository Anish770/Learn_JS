function setUserName(username) {
    this.username=username
    console.log('called');
}
function createUser(username,email,password) {
    setUserName.call(this,username)
    this.email=email
    this.password=password
    // return this
}
const user1=new createUser('anish','anish@gmail.com','zen')
console.log(user1);