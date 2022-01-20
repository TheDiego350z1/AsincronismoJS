const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => {
                resolve('YEs')
            }, 3000)
            : reject(new Error('Test Error'));
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}


//Captura de errores


const anotherFuntion = async () => {
    try{
        const something2 = await doSomethingAsync();
    } catch(error) {
        console.error(error)
    }
}