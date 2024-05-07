const cust={
    _email:'anish093@gmail',
    _password:'3242',

    get email()
    {
        return this._email
    },
    set email(val)
    {
        this._email=val
    },
    get password()
    {
        return this._password
    },
    set password(val)
    {
        this._password=val
    }
}
const customer= Object.create(cust)
console.log(customer.email);
console.log(customer.password);