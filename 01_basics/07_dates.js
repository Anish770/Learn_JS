let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(typeof(myDate))
let my_own_date=new Date(2024,0,23,15,16)
console.log(my_own_date.toDateString())
console.log(my_own_date.toLocaleString())
let my_timestamp=Date.now()
console.log(my_timestamp)
console.log(my_own_date.getTime())
console.log(Math.floor(Date.now()/1000))
let newDate=new Date()
console.log(newDate)
console.log(newDate.getDate())
newDate.toLocaleString('default',
{
    weekday:"long"
})
console.log(newDate)