class Customer{
    constructor (username)
    {
        this.username=username
    }
    logMe()
    {
        console.log(`welcome ${this.username}`);
    }
}
class Teacher extends Customer{
    constructor (username,email,password)
    {
        super(username)
        this.email=email
        this.password=password
    }
    addCourse()
    {
        console.log(`A course has been added by ${this.username}`);
    }
}
const teach1= new Teacher ('Anish','abc@gmail.com','320')
console.log(teach1);
teach1.addCourse()

const user1=new Customer('mahi')
user1.logMe()
// user1.addCourse() //