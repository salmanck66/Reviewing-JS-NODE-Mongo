const str = " manja manja manja bulbukal!  "
const str1 = "%"

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str1.padStart(5,"L"));
console.log(str1.padEnd(5,"W"));
console.log(str.charAt(5));
console.log(str.split(" "));
console.log(str.concat(str1));
console.log(str.substring(5));
console.log(str.slice(-12,-6));
console.log(str.replace("m",'b'));
console.log(str.replaceAll("m",'b'));
console.log(str.charCodeAt(5));
console.log(str.charAt(2));
console.log(str.split(" ").join());

console.log(str.indexOf('manja'));
console.log(str.lastIndexOf('manja'));
console.log(str.search(/manja/));
console.log(str.match('nja'));
console.log(str.matchAll(/manja/g));
console.log(str.includes("manja"));
console.log(str.startsWith("manja"));

