let a = 10

//Function Expression
let cubed = function()
{
    console.log((a*a)*a)
}
cubed()

// Function Declaration

function cube()
{
    console.log((a*a)*a)
}
cube()

// Function Statement
function sss(a)
{
    console.log((a*a)*a)
}
sss(4)

//Anonymous Function
let aa = function()
{
    console.log((a*a)*a)
}
aa()
//Named Function Expression
let cubess = function xyz()
{
    console.log((a*a)*a)
}
cubess()
// Higher Oreder Function
function Op(a,b,op)
{
    return op(a,b)
}
function sum(a,b)
{
    return a+b
}
console.log(Op(1,2,sum))

