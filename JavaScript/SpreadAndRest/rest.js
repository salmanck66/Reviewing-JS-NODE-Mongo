//fn rest
function sum(...input)
{
    return input.reduce((a,b)=>a+b,0)
}

console.log(sum(2,3,7,0,4,3,5))
// array destructure

const [one,two,three,...rest] = [2,3,4,6,2]
console.log(rest);