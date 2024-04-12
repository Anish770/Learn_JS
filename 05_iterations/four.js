//for in
// const myObject={
//     js:'javascript',
//     html:'hypertext markup language',
//     css:'cascading style sheet'
// }
// for (const key in myObject) {//for in loop with object ,for object iteration it works in for in loop 
//     console.log(`${key} : ${myObject[key]}`);
// }

// const myarr=["js","ruby","python","c++","c"]//testing with arrays//works
// for (const key in myarr) {
//     console.log(key);
// }

const map=new Map()//testing for in loop in map //doesn't works
map.set('IN','India')
map.set('IN','Indonesia')//value gets updated if the keys are same but it have the same values in different keys
map.set('USA','United States of America')
map.set('UK','United Kingdom')
map.set('CA','Canada')
// console.log(map);
for (const [key,value] in map) {
   console.log(key,':',value);
}