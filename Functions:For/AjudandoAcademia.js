function calcularMedia(notas) {

    if (notas.length === 0) {
        return 0;
    }

    var soma = 0;

    for (var i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    var media = soma / notas.length;

    return media;
}

var valoresExemplo = [5, 10, 15, 20];
var mediaCalculada = calcularMedia(valoresExemplo);
console.log(mediaCalculada); // Saída: 12.5