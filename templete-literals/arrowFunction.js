// função normal 
function normalSum(a,b) {
    return a + b    
}
console.log(`Soma Normal:  ${normalSum(2, 2)}`)

// Agora uma Arrow Function

const arrowFunction = (a, b) => {
    return a - b / 2
}
console.log(`Soma Arrow Function:  ${arrowFunction(10, 10)}`)

// Outra forma de usar o Arrow Function

const SubtractArrow = (a, b) => a - b

console.log(`Subtract: ${SubtractArrow(10, 10)}`)

// Outra situação, se usar só um parâmetro não precisa ser entre ()

const double = n => `O dobro de ${n} é ${n * 2}`

const number = 10
console.log(double(number))

//Outro exemplo de Arrow Function com arrays

const towns = [`Prontera`, `Natal`, `Porto Alegre`, `Joao Pessoa`, `Recife`, `Nova Cruz`]

const startingWithN = towns.filter(town => town[0] === "J")

console.log(startingWithN)