// Global
let a = "Salman";
let b = "Faris";
let c = "CK";


(function()
{
console.log(`${a}`);
    (function()
    {
    console.log(`${b}`);
        (function()
        {
        console.log(`${c}`);
        })();
    })();
})();