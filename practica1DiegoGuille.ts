// Practica 1 realizada por Guillermo Ariño y Diego González


const array1 = [200, 4, 3];

const array2 = [[1, 2, 3], 2, [4, 5, 6]];

const array3 = [0, 1, 432, [3, 21]]

const array4 = [0, 1, '2', [[['3', 4]]]];

function convertirDeStringAInt(array: any) {
    try {
        return array.flat(Number.MAX_SAFE_INTEGER).map((elementos: any) => {
            if (typeof elementos === "string") {
                return parseInt(elementos);
            }
            else if (typeof elementos === "number") {
                return elementos;
            }
            else {
                throw "Tipo no valido";
            }

        })
    }
    catch (error) {
        console.log(error)
    }
}


export function arrayModificado(arrayParametro: Array<any>) {
    try {

        arrayParametro = convertirDeStringAInt(arrayParametro);


        const arrayDatosNuevos = arrayParametro.map((numero: number, index: number) => {
            return arrayParametro.reduce((acumulador: number, elemento: number, indice: number) => {
                if (index !== indice) {
                    return acumulador * elemento;
                }
                else {
                    return acumulador;
                }
            }, 1);
        });
        return arrayDatosNuevos;
    }
    catch (error) {
        console.log(error);
    }
}




const array1Modificado = arrayModificado(array1);
//console.log("Resultado array 1: ", array1Modificado);

const array2Modificado = arrayModificado(array2);
//console.log("Resultado array 2: ", array2Modificado);

const array3Modificado = arrayModificado(array3);
//console.log("Resultado array 3: ", array3Modificado);

const array4Modificado = arrayModificado(array4);
//console.log("Resultado array 4: ", array4Modificado)
