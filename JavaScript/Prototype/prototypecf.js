function Person (name,age)
{
this.name = name
this.age = age
}

Person.prototype.sayHello = function (){ console.log(`${this.name} ${this.age}`)
}
let val1 = new Person("salman",26)
val1.sayHello()
