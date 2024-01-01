// // async function fSum(a,b)
// // {
// //     let sum = await sumA()
// //     console.log(sum);
// // }
// // function sumA(a,b)
// // {
// //     return new Promise((resolve,reject)=>
// //     {
// //         if(true)
// //         {
// //             resolve(a+b)
// //         }
// //         else
// //         {
// //             reject(new Error("Error"))
// //         }
// //     })
// // }


// // fSum(2,3).then((result)=>
// // {
// //     console.log(result);
// // })

// const GITHUB_API = "https://api.github.com/users/salmanck66"
// const user = fetch(GITHUB_API)
// console.log(user);
// user.then((data)=>
// {
//     console.log(data);
// })


// const {name:Rname,age} = myObj 
// console.log(myObj);

const ar  = [1,2,5,6,7]
console.log(ar.map((item)=>item*2));
console.log(ar.filter((item)=>item>2));
console.log(ar.reduce((cval,ci)=>cval+ci));
console.log("foreach");
ar.forEach((item)=>console.log(item*2))
console.log("foreach");
console.log(ar.find((num)=>num>3));
console.log(ar.sort((a,b)=>b-a));
ar.push(9)
ar.pop()
ar.shift()
ar.unshift()
console.log(ar);
