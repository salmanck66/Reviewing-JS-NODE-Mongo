const array = [1,5,2,7]
console.log(array.map((a)=>a*a));
console.log(array.filter((a)=>a>5));
console.log(array.reduce((a,b)=>a+b));
console.log(array.find((a)=>a>2));
console.log(array.sort((a,b)=>b-a));
console.log(array.forEach((num)=>console.log(num*2)));

console.log(array.push(1,2))
console.log(array.map((a)=>a));

console.log(array.pop())
console.log(array.map((a)=>a));

console.log(array.shift())
console.log(array.map((a)=>a));

console.log(array.unshift(2))
console.log(array.map((a)=>a));

console.log(array.slice(0,2))
console.log(array.splice(0,2,1,3))
console.log(array.map((a)=>a));




