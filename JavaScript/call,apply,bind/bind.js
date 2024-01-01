let obj1 = {
    name :"salman",
    age : "23"
}
function GetHt(ht,star)
{
    return `${this.name} ${this.age} ${ht} ${star}`
}
const fn = GetHt.bind(obj1)

console.log(fn('areekode','aries'));