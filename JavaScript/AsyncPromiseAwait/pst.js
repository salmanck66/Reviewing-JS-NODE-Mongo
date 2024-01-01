async function sum() {
    let result = await calculation(5,5)
    console.log(result);
}



let calculation = (a,b) => {
    return new Promise( (resolve,reject) => {
         try {
            resolve(a+b)
            
         } catch (error) {
            console.error(error);
            reject(error)
         }
    })

}

sum()