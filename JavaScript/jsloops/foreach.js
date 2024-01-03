let num = [1,2,3,5,7]
let fruits = ['apple', 'banana', 'orange'];
num.forEach(element => {
    console.log(element);
});
num.forEach((price,index,array) => {
    array[index]=price+10
});
console.log(num);

fruits.forEach((item,index) => {
    console.log(`index ${index}:${item}`)
});
