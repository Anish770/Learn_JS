class User{
    constructor(username)
    {
        this.username=username
    }
    logMe()
    {
        console.log(`username is ${this.username}`);
    }
    static createId()
    {
        return `123`
    }
}
const user1=new User('anish')
console.log(user1.createId());