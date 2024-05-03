const Myname='anishchettri';
console.log(Myname.length);

const myHeroes=['thor','spiderman']
const myHeroesPowers={
    thor:'hammer',
    spiderman:'sling',
    getHeroPowers: function()
    {
        console.log(`u got ${this.spiderman}`);
    }
}
Object.prototype.anish=function () {
    console.log(`anish present in all the object`);
}
// myHeroesPowers.getHeroPowers.anish();

Array.prototype.zen=function () {
    console.log(`zen is only available in array`);
}
myHeroes.zen()
// myHeroesPowers.zen()

const student={
    name:'anish',
    email:'anish@gmail.com',
    Listening:true
}
const teacher={
    makeVideo:true
}
const TeachingSupport={
    hired:false
}
const TASupport={
    makeAssignments:true,
    fullTime:true,
    __proto__:TeachingSupport
}
teacher.__proto__=student

//mordern syntax
Object.setPrototypeOf(teacher,TeachingSupport)

const username='anishchettri             '
console.log(username.length);
String.prototype.trueLength=function () {
    let count=0
    console.log(`${this}`);
    for (let i=this.length-1;i>=0;i--)
        {
            if(this[i]==' ')
                {
                    count++;
                }
                else{
                    break;
                }
        }
        console.log(this.length-count);
}
username.trueLength()