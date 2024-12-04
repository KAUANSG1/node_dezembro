var inicio = 1

//1º Loop
while(inicio <= 10)
{
    console.log(inicio)
    inicio = inicio + 1;
}

//2º Loop
for (let i = 1; i <= 10; i++)
{
    console.log(i);
}

//usando while 3º Loop
var ini = 1;
var fim = 10;

while (fim >= 1)
{
    console.log(fim);
    fim -= 1; // é a mesma coisa que "ini = ini + 1" ou "ini ++"
}

//usando for
for (var ini = 10; ini >= 0; ini = ini - 1)
{
    console.log(ini);
}

const nome = "Kauan"; // var; let e const
nome = "Paulo"; //string

//var nome; //

console.log(nome);