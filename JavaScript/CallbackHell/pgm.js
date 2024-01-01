setTimeout(function()
{
    console.log("step1");
        setTimeout(function()
            {
            console.log("step2");
            },1000)
},1000)