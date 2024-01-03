
let promise = new Promise((resolve,reject)=>setTimeout(() => {
    resolve("First")
}, 1002))
let promise2 = new Promise((resolve,reject)=>setTimeout(() => {
    let err = "error"
    resolve("second")
}, 1001))

Promise.all([promise,promise2]).then((result)=>
{
    console.log(result);
}).catch((error)=>
{
    console.log(error);
})

Promise.any([promise,promise2]).then((result)=>
{
    console.log(result);
}).catch((error)=>
{
    console.log(error);
})

Promise.race([promise,promise2]).then((result)=>
{
    console.log(result);
}).catch((error)=>
{
    console.log(error);
})