const promiseOne=new Promise(function(resolved,reject)
{
    //do an async task
    //db calla,crypto,network
    setTimeout(()=>{
        console.log('async task is completed');
        resolved()
    },1000)
})
promiseOne.then(()=>{
    console.log('Promise consumed');
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task 2 completed');
        resolve()
    },1000)
}).then(()=>{
    console.log('promise 2 completed');
}) 

const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:'Anish Chettri',email:'anishchetrri@gmail.com'})
    },1000)
})
promiseThree.then((user)=>{
    console.log(user);
})
const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if (!error) {
            resolve({username:'anish', password:'123'})
        }
        else{
            reject('ERROR: UNKNOWN ERROR 404')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
   return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log('promise resolved or rejected'))

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if (!error) {
            resolve({username:'zen', password:'zen123'})
        }
        else{
            reject('ERROR: UNKNOWN ERROR 404')
        }
    },1000)
})
async function consumePromiseFive() {
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
}
consumePromiseFive()
// method 1
// async function getUserInfo() {
//     try {
//         const response=await fetch('https://api.github.com/users/Anish770')
//         // console.log(response);
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ',error);
//     }
// }
// getUserInfo()

//method 2
fetch('https://api.github.com/users/Anish770')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))
