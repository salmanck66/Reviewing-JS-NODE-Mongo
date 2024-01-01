const obj = {
    name:"salman",
    age:20,
    adress :{
        city: "areekode"
    }
}
const {name , age, adress:{city}} = obj
console.log(city);