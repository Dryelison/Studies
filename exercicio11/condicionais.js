const veiculo1 = prompt ("ïnforme o nome do primeiro veiculo:")
const velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veículo:"))

const veiculo2 = prompt ("ïnforme o nome do segundo veiculo:")
const velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veículo:"))

if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rápido do que " + veiculo2)
} else if (velocidade2 > velocidade1){
    alert(veiculo2 + " é mais rápido do que " + veiculo1 )
} else {
    alert(veiculo1 + "e" + veiculo2 + "possuem velocidades iguais.")
}