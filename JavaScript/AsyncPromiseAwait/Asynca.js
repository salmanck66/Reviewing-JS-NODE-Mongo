// let proo= new Promise((res,rej)=>
// {   
//     if(res)
//     {
//         setTimeout(()=>{
//             res('Done')
//         },1000)
//     }else
//     {
//         rej("Rejd")
//     }
// }) 

// async function xyz ()
// {
//     await proo
//     console.log("Barfu");
// }
// xyz()

let myPromise = new Promise((resolve,reject)=>
{

    if(true)
    {
        resolve("Sheryayiiii")
    }else
    {
        reject("potti")
    }
})
myPromise.then((result)=>
{
    console.log(result);
}).catch((error)=>console.log(error))