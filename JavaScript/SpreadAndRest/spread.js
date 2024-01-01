//Array Spread

const arr = [1,2,5]
const arr1 = [...arr,3,2,6]
console.log(arr1);

//obj spread

const obj = {1:1,2:2,5:5}
const obj1 ={...obj,7:7}
console.log(obj1);

// fn spread
function fn(a,b,c)
{
    return a+b+c
}
console.log(fn(...arr));

