// let carros = ["fusca", "gol", "saveiro", "passat", "jetta"];

//  for(let i = 0; i < carros.length; i++) {
//      console.log(carros[i]);
//  }

// metodo map criar um novo array que contem o comprimento do array carros
//  let novoCarros= carros.map((carros) => {
//      return carros.length;
// });

//  console.log(novoCarros) // Exibir o novo array

// let legumes = ["batata", "cenoura", "beterraba", "beringela", "chuchu"]

// let legumesComB = legumes.filter (b => b.startsWith("b"));

//  let legumesComB = legumes.filter(legume => legume.startsWith("b"));

//  console.log(legumesComB);



//function saudacao () {
//     console.log("Olá jovem!");
//}

// saudacao ();
//  function saudacao (nome) {
//     console.log (`ola ${nome}`);
// }
//  saudacao("Rafinha");

//modificar a função despedida para que aceite um parâmetro nome e imprima uma mensagem personalizada.


//  function despedida (nome) {
//       console.log (`Olá ${nome} Boa noite `);
//  }
//   despedida("Rafinha");

//   function soma (a, b){
//      return a + b;
//   }

//   console.log(soma(1, 2));
//   console.log(soma(4, 9));
//   console.log(soma(5, 3));

//criar uma função chamada multiplicação que retorne o produto de dois números.

//  function multiplicação (a, b){
//      const resultado = a * b
//    console.log(resultado);
//      return resultado;
//  }

//  multiplicação(1, 2);
 
//  let somaAnonima = function(a, b) {
//      return a + b
// }
// console.log(somaAnonima(1, 2));


//Exercício 1: Função de Saudação
// Objetivo: Criar uma função que aceita um nome e imprime uma saudação.
// Tarefa:
// Crie uma função chamada saudacao que recebe um parâmetro nome e retorna a string "Olá, [nome]!".

             1

//  function saudacao (nome) {
//      return (`Olá ${nome} Boa tarde`);
//  }
//   console.log(saudacao("Rafinha"));

// // Exercício 2: Soma de Dois Números
// // Objetivo: Criar uma função que soma dois números.
// // Tarefa:
// // Crie uma função chamada soma que recebe dois parâmetros, a e b, e retorna a soma deles.

//              2

//  function soma (a, b){
//            return a + b;
//  }
    
//      console.log(soma(1, 2));
//      console.log(soma(4, 9));
//      console.log(soma(5, 3));

//  //Exercício 3: Verificação de Par ou Ímpar
// //  Objetivo: Criar uma função que verifica se um número é par ou ímpar.
// //  Tarefa:
// // Crie uma função chamada parOuImpar que recebe um número e retorna "Par" ou "Ímpar" dependendo da verificação.

//             3

//  function parOuImpar(numero){
//     if (numero %2=== 0){
//         return "Par"
//     }else{
//         return "Impar"
//     }
//  }
//  console.log(parOuImpar(4)); //true
//  console.log(parOuImpar(5)); //false

//  //Exercício 4: Cálculo da Média
// // Objetivo: Criar uma função que calcula a média de três números.
// // Tarefa:
// // Crie uma função chamada media que aceita três números como parâmetros e retorna a média deles.

//              4
 
// function media(num1, num2, num3) {
//     let soma = num1 + num2 + num3;
//     let media = soma / 3;
//     return media;
// }
// console.log(media(4, 6, 8)); //6
// console.log(media(10, 20, 30)); // 20

// //Exercício 5: Palíndromo
// // Objetivo: Criar uma função que verifica se uma palavra é um palíndromo.
// // Tarefa:
// // Crie uma função chamada ehPalindromo que aceita uma string e retorna true se a string for um palíndromo, e false caso contrário.

//              5

// function ehPalindromo(str) {
//     //remove espaços e converte para minúsculas
//     let palavra = str.replace(/\s+ /g, '').toLowerCase();
//     //inverte a string
//     let palavraInvertida = palavra.split('').reverse().join('');
//     //Verifica se a string original é igual á invertida
//     return palavra === palavraInvertida;
// }
// //Edemplo de uso
// console.log(ehPalindromo("arara")); // true
// console.log(ehPalindromo("banana")); // false


// //Exercício 6: Contagem de Vogais
// // Objetivo: Criar uma função que conta o número de vogais em uma string.
// // Tarefa:
// // Crie uma função chamada contarVogais que aceita uma string e retorna o número total de vogais (a, e, i, o, u) na string.

//              6
// function contarVogais(str) {
//         // Define as vogais
// const vogais = 'aeiouAEIOU';
// let contador = 0;
             
// // Percorre cada caractere da string
// for (let char of str) {
// // Verifica se o caractere é uma vogal
// if (vogais.includes(char)) {
//         contador++;
// }  
// }
             
//   return contador;
// }
             
//   // Exemplos de uso
//  console.log(contarVogais("Olá, mundo!")); // 4
//  console.log(contarVogais("Javascript")); // 3
//  console.log(contarVogais("Contagem de vogais")); // 7
//  console.log(contarVogais("12345")); // 0
        
            
// //Exercício 7: Fatorial
// // Objetivo: Criar uma função que calcula o fatorial de um número.
// // Tarefa:
// // Crie uma função chamada fatorial que aceita um número inteiro e retorna o fatorial desse número.
        
//              7

// function fatorial(n) {
// if (n < 0) {
// return "O fatorial não está definido para números negativos."; // Tratamento para números negativos
// }
// if (n === 0 || n === 1) {
// return 1; // O fatorial de 0 e 1 é 1
// }
// let resultado = 1; // Inicializa o resultado
// for (let i = 2; i <= n; i++) {
// resultado *= i; // Multiplica os números de 2 até n
// }
// return resultado; // Retorna o fatorial calculado
// }
             
// // Exemplo de uso
// console.log(fatorial(5)); // 120
// console.log(fatorial(0)); // 1
// console.log(fatorial(-3)); // "O fatorial não está definido para números negativos."

//Exercício 8: Gerador de Números Aleatórios
// Objetivo: Criar uma função que gera um número aleatório em um intervalo.
// Tarefa:
// Crie uma função chamada numeroAleatorio que aceita dois parâmetros, min e max, e retorna um número inteiro aleatório entre esses valores (inclusive).

             8

             function numeroAleatorio(min, max) {
                // Garante que os argumentos são inteiros
                min = Math.ceil(min);
                max = Math.floor(max);
             
                // Gera um número aleatório entre min e max (inclusive)
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
             
            // Exemplos de uso
            console.log(numeroAleatorio(1, 10));  // Um número aleatório entre 1 e 10
            console.log(numeroAleatorio(5, 15));  // Um número aleatório entre 5 e 15
            console.log(numeroAleatorio(0, 100)); // Um número aleatório entre 0 e 100
            

//Exercício 9: Reversão de String
// Objetivo: Criar uma função que inverte uma string.
// Tarefa:
// Crie uma função chamada inverterString que aceita uma string e retorna a string invertida.

             9

             function inverterString(str) {
                // Divide a string em caracteres, inverte e junta novamente
                return str.split('').reverse().join('');
            }
             
            // Exemplos de uso
            console.log(inverterString("hello")); // "olleh"
            console.log(inverterString("JavaScript")); // "tpircSavaJ"
            console.log(inverterString("12345")); // "54321"
    
            

//Exercício 10: Conversão de Temperatura
// Objetivo: Criar uma função que converte Celsius para Fahrenheit.
// Tarefa:
// Crie uma função chamada celsiusParaFahrenheit que aceita uma temperatura em graus Celsius e retorna a temperatura convertida para Fahrenheit usando a fórmula F=C×95+32F = C \times \frac{9}{5} + 32F=C×59+32.

            10

            function inverterString(str) {
                // Divide a string em caracteres, inverte e junta novamente
                return str.split('').reverse().join('');
            }
             
            // Exemplos de uso
            console.log(inverterString("hello")); // "olleh"
            console.log(inverterString("JavaScript")); // "tpircSavaJ"
            console.log(inverterString("12345")); // "54321"
             
            function celsiusParaFahrenheit(celsius) {
                // Aplica a fórmula de conversão
                const fahrenheit = (celsius * (9 / 5)) + 32;
                return fahrenheit;
            }
             
            // Exemplos de uso
            console.log(celsiusParaFahrenheit(0));    // 32
            console.log(celsiusParaFahrenheit(100));  // 212
            console.log(celsiusParaFahrenheit(-40));  // -40
             

