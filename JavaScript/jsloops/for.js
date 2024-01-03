let array = [1,2,3,4,5]
let s_array = ["sal","pal","eei","sss","fff"]
let o_array = [
    {name:"salman",age:27},
    {name:"ff",age:23},
    {name:"fggf",age:24},
    {name:"hello",age:29}
]
let details = {
    username : "salman",
    mail : "salman@gmail.com",
    phonenumber: 9947999999,
    adress : [
        {
        streetno : "street1",
        housename : "parambil"   
        },
        {
            streetno : "street2",
            housename : "parambil"   
            }
    ],
    showmail: function()
    {
        return `${this.mail}`   
    }
}
details.adress.forEach(data => {
    if (data.streetno ==="street2") {
        data.streetno = "street3"
        data.royalty = true
    }
    
});
let count = 0 

for( let i = 0;i<o_array.length;i++)
{
    if(o_array[i].name==="hello")
    {
        Object.assign(o_array[i],{gender:"male"})
    }else
    if(o_array[i].name==="salman")
    {
        o_array[i].gender = "Gmail"
    }
    else
    if(o_array[i].name==="ff")
    {
        o_array[i]["name"] = "arafath"
    }
}
console.log(o_array);
console.log(details);