const atacante = prompt("Informe o nome do atacante:")
const poderDeAtaque = parseFloat(prompt("Informe o poder de ataque:"))

const defensor = prompt("Informe o nome do defensor:")
let vida = parseFloat(prompt("Informe a quantidade de vida restante:"))
const poderDeDefesa = parseFloat(prompt("Informe o poder de defesa:"))
const escudo = prompt("O defensor possui escudo? (Sim/Não)")

let danoCausado = 0 

if (poderDeAtaque > poderDeDefesa && escudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
    
} else if (poderDeAtaque > poderDeDefesa && escudo === "Sim"){
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
} 
vida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\nPontos de vida: " + vida +
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + escudo
)



