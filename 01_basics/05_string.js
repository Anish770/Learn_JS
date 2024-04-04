const name="anish"
const count=10
// console.log(name+count)//old version syntax
console.log(`Hello my name is ${name} and my count is ${count}`)//newer way of adding the string with backticks 
const game_name=new String('zen_xd')//01234 in forward indexing and-4-3-2-10 in backward indexing
console.log(game_name[0])
console.log(game_name.__proto__)//to check the prototype of the variable
console.log(game_name.length)
console.log(game_name.toUpperCase())
console.log(game_name.indexOf('x'))//to find the location of particular char 
console.log(game_name.charAt(3))//to find the char at particular location where minus indexing is not allowed
const newSubString=game_name.substring(0,2) //negative indexing is not allowed
console.log(newSubString)
const anotherString=game_name.slice(0,-4)//negative indexibg is allowed
//while in minus indexing the starting index is exclusive and
// while in positive indexing the ending index is exclusive and 
//while in minus indexing is at starting index and postive indexing is at the ending index the starting index and ending index both are exlusive
//while in positive indexing is at starting index and minus indexing is at the ending index the starting index and ending index both are exlusive
console.log(anotherString)
const anotherNewString="    zen       "
console.log(anotherNewString)
// console.log(anotherNewString.trimStart())
console.log(anotherNewString.trim())//for triming the whitespaces
const url ="https://anishchettri.com/%20chettri"
console.log(url.replace('%20','nan/'))//for replacing a particular string or substring
console.log(url.includes('nan/'))
console.log(game_name.split('_'))//to split the string with some regular repetitive expression
console.log(game_name.at(-1))//another way of finding the char where minus indexing is allowed
// console.log(game_name.charAt(-3))