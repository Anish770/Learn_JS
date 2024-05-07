const descriptor=Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descriptor);
// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);
const details={
    name:'anish',
    age:'21',
    loggedIn:true,
    status:function(){
        console.log('not working');
    }
}
console.log(details);
// console.log(Object.getOwnPropertyDescriptor(details,'name'));
Object.defineProperty(details,'name',{
    // writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(details,'name'));
// const myname=details.name='ansada';
// console.log(myname);
// console.log(details);

for (const [key,value] of Object.entries(details)) {
    if (typeof value!=='function') {
        console.log(`${key}:${value}`);
    }
}