class Register{
    constructor(email,password)
    {
        this.email=email
        this.password=password
    }
    get email()
    {
        return this._email.toUpperCase();
    }
    set email(value)
    {
        this._email=value
    }
    get password()
    {
        return this._password.toUpperCase();
    }
    set password(value)
    {
        this._password=value
    }
}
const new_register=new Register('anish@gmail','abc')
console.log(new_register.email);
console.log(new_register.password);