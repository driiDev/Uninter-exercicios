let paragrafo = document.querySelector("#para1");

paragrafo.addEventListener("click", trocaTexto);

function trocaTexto(){
    document.getElementById('para1').innerHTML='Olá mundo!';
}

console.log("Olá, mundo!");
console.log("4 + 4 é " + (4 + 4));

const nome = "Andrielle";
let idade = 19;

if(idade >= 18){
    console.log(`Olá ${nome}. Sua idade é ${idade}.`);
} else{
    console.log("Acesso bloqueado.");
}

