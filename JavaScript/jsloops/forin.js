let s_array = ["sal","pal","eei","sss","fff"]

let details = {
    name:"salman",
    age : 21,
    laptop: {
        s:1,
        e:2
    }
}
let a = {...details}
console.log(a);
delete details.age

// for (let name of s_array) {
//     if(name==="sal")
//     {
//         name = "salman"
//     }
//     console.log(name);
// }
// console.log(Object.keys(details));

for(let key in details.laptop)
{
    console.log(`${key} : ${details.laptop[key]}`);
}
console.log(details);  