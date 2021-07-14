let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("------1------")

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
  }

console.log("------2------")

let soma=0;

for (indexEx2 = 0; indexEx2 < numbers.length; indexEx2++) {    
   soma = soma + numbers[indexEx2];
}
console.log(soma);

console.log("------3------")

let mediaAritmetica = soma / numbers.length;

console.log(mediaAritmetica);

console.log("------4------")

if (mediaAritmetica > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

console.log("------5------")

let currentNumber = 0;
let maiorNumero = 0;

