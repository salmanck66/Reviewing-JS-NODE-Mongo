// // function ot()
// // {
// //     let a = 10
// //     function inner()
// //     {
// //         let val = a*a
// //         return val
// //     }
// //     return inner()
// // }
// // console.log(ot());

// function counter()
// {
//     let count = 0

//     function inc()
//     {
//         count++
//         console.log(count);
//     }
//     function dec()
//     {
//         count--
//         console.log(count);
//     }
//     return {
//         inc,dec
//     }
// }

// const cnt =new counter()

// cnt.inc()
// cnt.inc()
// cnt.dec()


// function outer(x)
// {
//     return function inner(y)
//     {
//         return x+y
//     }
// }

// let sum = outer(5)
// console.log(sum(4));

function counter()
{
    let count = 1
    return function inc()
    {
        return count++
    }
}
 let count = counter()
console.log(count());
console.log(count());
