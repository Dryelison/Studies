const nome = prompt("Informe o nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do recruta:")
const estudo = prompt("Informe o campo de estudo:")
const anoNascimento = prompt("Informe o ano de nascimento:")

alert(
    "Recruta cadastrato com sucesso!" +
    "\nNome completo do Recruta:" + nome + " " + sobrenome +
    "\nCampo de estudo do Recruta:" + estudo +
    "\nIdade do Recruta:" + (2022 - anoNascimento)
)



