// const axios = require('axios');

// let resp = axios.get('https://www.boredapi.com/api/activity')
// resp.then((data)=> console.log(data.data)).catch((error)=>console.log(error))


async function operation(a,b)
{
    await result = sum()
}

function sum(a,b)
{
    return new Promise((resolve,reject)=>
    {
        if(a&&b)
        {
            resolve(a+b)
            console.log("done");
        }else
        {
            const err = 'error'
            reject(err)
        }
    })
}