setTimeout(()=>{
    console.log('hell 1');
    setTimeout(()=>{
        console.log('hell 2');
        setTimeout(()=>{
            console.log('hell 3');
            setTimeout(()=>{
                console.log('hell 4');
            },1000)
        },1000)
    },1000)
},1000)

