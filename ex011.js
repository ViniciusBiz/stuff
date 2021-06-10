// exercício-teste de estruta de decisão
var idade = 12
console.log(`você tem ${idade} anos`)
if (idade < 16) {
    console.log("Não vota")
}
else if (idade >= 16 && idade <= 18 || idade >=65) {
    console.log("voto facultativo")
}
else {
    console.log("voto obrigatório")
}
