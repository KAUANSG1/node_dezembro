// 1 - Inverter o texto
// Oi Turma -> amruT iO

let texto = "Que dia ensolarado!";
let texto_invertido = texto.split("").reverse().join("")
console.log(texto_invertido);

let texto_1 = "Que dia ensolarado!";
let fim = texto.length - 1;

// 1 - Inverter o texto
// Oi Turma -> amruT iO
let resultado = "";

for (let ini = texto_1.length - 1; ini >= 0; ini--)
{
    resultado += texto_1[ini]
}
console.log(resultado);

// 2 - Contar Vogais e Consoantes
// Texto -> Vogais:2 Consoantes:3
let vogais = ["a", "e", "i", "o", "u"];
let num_vogal = 0;
let num_cons = 0;

for (let ini = 0; ini <= texto.legth -1; ini++)
{
    let letra = texto.charAt(ini);
    
    if (vogais.includes(letra) == true)
    {
        num_vogal += 1;
    }
    else
    {
        num_cons += 1;
    }
}

console.log("vogais: "+ num_vogal + " consoantes: " +num_cons);

// 3 - Colocar o texto em ordem alfabetica
// Texto -> eottx
// 3412 -> 1234
