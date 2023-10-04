let arrayVacio = []

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

let arrayNumerosPares = [0, 2, 4, 6, 8]

let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]

function suma (num1, num2) {
    return num1 + num2
}

function potenciacion (a, b){
    return Math.pow(a,b)
}

function separarPalabras(str){
    return str.split(' ')
}

function repetirString(str, num){
    let string = ''
    for(let i = 0; i < num; i++){
        string = string.concat(str)
    }
    return string
}

function esPrimo(num){
    for (let i = 0; i <= num; i++){
        if (i !== num && i !== 1 && num % i === 0){
            return false
        }
    }
    return true  
}

function ordenarArray(arr){
    return arr.sort(function (a, b){return a - b})
}

function obtenerPares(arr){
    return arr.filter(function (a){return a % 2 === 0})
}

function pintarArray(arr){

    let iterator = arr.values(), str = '['
    for(let i = 0; i < arr.length; i++){
        if(i !== arr.length - 1){
            str += `${arr[i]}, `
        } else {
            str += `${arr[i]}]`
        }
    }
    return str
}

function arrayMapi(arr, func){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(func(arr[i]))
    }
    return newArr
}

function eliminarDuplicados(arr){
    let newArr = arr.reduce((acum, item)=>{
        if(!acum.includes(item)){
            acum.push(item)
        }
        return acum
    }, [])
    return newArr
}

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

let holaMundo = ['Hola', 'Mundo']

let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

function multiplicacion(num1, num2){
    return num1 * num2
}

function division(num1, num2){
    return num1 / num2
}

function esPar(num){
    if (num % 2 === 0){
        return true
    }
    return false
}
function resta(num1, num2){
    return num1 - num2
}
let arrayFunciones = [suma, resta, multiplicacion, division]

function ordenarArray2(arr){
    return arr.sort(function (a, b){return a - b})
}

function obtenerImpares(arr){
    return arr.filter(function (a){return a % 2 !== 0})
}

function sumarArray(arr){
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}

function multiplicarArray(arr){
    let total = arr[0]
    for(let i = 1; i < arr.length; i++){
        total *= arr[i]
    }
    return total
}