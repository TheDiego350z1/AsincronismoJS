/**
 * Promesas
*/

const somethingWllHappen = () => {
    return new Promise((resolve, reject) => {  //Declaramos la promesa
        if(true) {
            resolve('Hey!');
        } else {
            reject('Whoooop"');
        }
    });
};


// somethingWllHappen()
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


const somethingWllHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(false){
            setTimeout(() => {
                resolve('True');
            }, 2000);
        } else {
            const error = new Error('Opps');
            reject(error);
        }
    });
};

// somethingWllHappen2()
//     .then(response=> console.log(response))
//     .catch(error=> console.error(error));


/**
 * Encadenamiento de primesas con promise.all
 * Se ejecutan ambas promesas siempre y cuando 
 * no se encuentren errores en la peticiones
*/


Promise.all([
    somethingWllHappen(),
    somethingWllHappen2()
])
    .then(response => {
        console.log('Arreglo de resultados', response);
    })
    .catch(error => {
        console.error(error);
    });