let obj = {
    name :"salman",
    habits : ["Food","Game","Money"],
    eateries :{
        drinks : ["coc","bull"],
        bites : {
            simple: ["burg","sand"],
            hard : ["fries","shawarma"]
        }
    }
}

// 1-Accessing Properties:
// How would you access the value of the name property in the obj object?
console.log(`A1:${obj.name}`);
// Nested Array Access:
//2-Retrieve the second element of the habits array.
console.log(`A2:${obj.habits[1]}`);
//3-Accessing Nested Properties:
//What is the syntax to access the value of the drinks array within the eateries object?
console.log(`A3:${obj.eateries.drinks}`);
// 4-Nested Object Access:
//Retrieve the value of the hard array within the bites object.
console.log(`A4:${obj.eateries.bites.hard}`);
// 5-Adding Property:
//How would you add a new property called location with the value "XYZ" to the obj object?
obj.location = "XYZ"
console.log("A5:");
console.log(obj);
// 6-Updating Property:
// Change the value of the name property to "John"
obj.name = "john"
console.log("A6:");
console.log(obj);
// 7-Array Modification:
// Add a new element "pizza" to the end of the simple array within the bites object.
obj.eateries.bites.simple.push("Shaway")
console.log("A7");
console.log(obj.eateries.bites);
//8-Conditional Access:
//Check if the property cuisine exists in the eateries object, and if not, add it with the value "Italian".
for (const key in obj.eateries) {
    if (key==="cuisine") {
        
    }else
    {
        obj.eateries.cuisine = "italian"
    }
}
console.log("A8");
console.log("A*");
console.log(obj);
//9-Iterating Over Array:
//Write a loop to iterate over the habits array and log each element to the console
console.log("A9");
obj.habits.forEach((element,index,array) => {
    console.log(element)
});
//10-Object Enumeration:
//Enumerate all properties (keys and values) of the eateries object.
console.log("A10:");
for (const key in obj.eateries) {
    console.log(`${key}: ${JSON.stringify(obj.eateries[key])}`);
    }


