let obj1 = {
    name :"salman",
    age : "23"
}
function GetHt(ht,star)
{
    return `${this.name} ${this.age} ${ht} ${star}`
}
console.log(GetHt.apply(obj1,['areekode','aries']))