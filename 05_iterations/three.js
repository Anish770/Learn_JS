//for of
// ["","",""]
// [{},{},{}]
// const ele=[1,2,3,4,5]
// for (const iterator of ele) {
//     console.log(iterator);
// }
// const greetings="hello world"
// for (const greet of greetings) {
//     console.log(greet);
// }
//maps
const map=new Map()
map.set('IN','India')
map.set('IN','Indonesia')//value gets updated if the keys are same but it have the same values in different keys
map.set('USA','United States of America')
map.set('UK','United Kingdom')
map.set('CA','Canada')
console.log(map);

for (const i of map) {//for printing both key and values
    console.log(i);
}
for (const [,value] of map) {//customising the key and value or getting control in key and value
    console.log(':',value);
}
for (const [key,value] of map) {//customising the key and value or getting control in key and value
    console.log(key,':',value);
}
for (const [key] of map) {//customising the key and value or getting control in key and value
    console.log(key,':');
}
const myObject={
    'game1':'NFS',
    'game2':'LEGO',
    'game3':'LOL'
}
// for (const i of myObject) {//object cannot be iterable in this for of loop
//     console.log(i);
// }