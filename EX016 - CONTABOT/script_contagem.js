function count(){
    let start = document.getElementById ('txt_start')
    let end = document.getElementById('txt_end')
    let step = document.getElementById('txt_step')
    let resposta = document.getElementById('resposta')

    if(start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        resposta.innerHTML='Impossível contar. Faltam dados.'
    } else {
        resposta.innerHTML = 'Contando...'
        let str = Number(start.value)
        let e = Number(end.value)
        let stp = Number(step.value)
        if (str < e){
            for (let contador = str; contador<=e; contador+= stp){
                // para (o contador vai começar no início e enquanto esse cotador for menor ou igual que o fim...
                //...o contador vai receber ele mesmo + o passo)
                
                resposta.innerHTML += `${contador} \u{1F449} `
            }
        } else {
            for (let contador = str; contador >= e; contador-=stp){
            //para(o contador vai começar do fim e enquanto esse contador for maior ou igual que o fim...
            //...o contador vai receber ele mesmo - o passo (contagem regressiva))
        
            resposta.innerHTML += `${contador} \u{1F449} `
       
            }
        }
            resposta.innerHTML += `\u{1F921}`
        }

    }    


