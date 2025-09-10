// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// const promise1 = new Promise((resolve, reject) => { // we can use normal or arrow function
//     // Do an async task
//     // DB calls, crypto, network
//     setTimeout(function(){
//         console.log('Async task is complete.');
//         resolve()
//     },1000)
// })      // Creating Promises

// promise1.then(function(){
//     console.log("Promise Consumed");        // Connected to resolve()
// })

// new Promise((resolve, reject) => {
//     setTimeout(function(){
//         console.log('Async task2 is complete.');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Promise2 Consumed"); 
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         resolve({username: "satyam", email: "satyam@example.com"})
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user);      // access the data from the promise
    
// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username: "satyam", email: "satyam@example.com", password: "123"})
//         }
//         else{
//             reject('Error: Something went wrong.')
//         }
//     },1000)
// })

// promise4
// .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
    
// }).catch(function (error) {
//     console.log(error);
    
// }).finally(() => console.log("Promise resolved or rejected"))

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(function(){
//         // let error = false;
//         let error = true;
//         if(!error){
//             resolve({username: "javascript", email: "javascript@example.com", password: "123"})
//         }
//         else{
//             reject('Error: JS went wrong.')
//         }
//     },1000)
// })

// async function consumePromise5() {
//     // const reponse = await promise5
//     // console.log(reponse);       // cannot handle error directly
//     try {
//         const reponse = await promise5
//         console.log(reponse);
//     } catch (error) {
//         console.log(error);
        
//     }
// }

// consumePromise5()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/satyam-dey-learning')
//         // console.log(response);
        
//         const data = await response.json()      // data to json takes time so that we use await for that
//         console.log(data);
//     } catch (error) {
//         console.log("Error",error);    
//     }
    
// }

// getAllUsers()

fetch('https://api.github.com/users/satyam-dey-learning')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))