let valores = [7,3,1,9,6,4]
for(posicao=0; posicao<valores.length; posicao++){
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
    
}
for(let posicao in valores){
    console.log(`A posição ${posicao} tem o valor ${valores[posicao]}`)
}