/-Object This-///
let stocks = {
    fname:"Salmanul",
    lname:"Faris CK",
    full_name:"",
    call: function xy (){
        return this.full_name =this.fname+""+this.lname
    }
}
console.log(stocks.call())

