let obj1 = {
    name :"salman",
    age : "23",
    GetNa : function ()
    {
        return `${this.name} ${this.age} `
    }

}

function GetHt(ht)
{
    return `${this.name} ${this.age} ${ht}`
}

console.log(GetHt.call(obj1,'areekode'))