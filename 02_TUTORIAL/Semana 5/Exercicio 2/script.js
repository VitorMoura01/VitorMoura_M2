function qtdNotas(){
    var notas = [1,2,5,10,20,50,100]
    var num = Number(document.getElementById("preco").value)

    for(var i = 0; i < notas.length; i++ ){
        if(num >= notas[i]){
            var notaAtual1 = notas[i]
        }
    }
    var qtd1 = Math.floor(num / notaAtual1)
    var restante = num % notaAtual1
    document.getElementById("res1").innerHTML = ` ${qtd1} nota(s) de ${notaAtual1}`
    if(restante != 0)
        for(var i = 0; i < notas.length; i++ ){
            if(restante >= notas[i]){
                    var notaAtual2 = notas[i]
                }
            }
        var qtd2 = Math.floor(restante / notaAtual2)
        var restante2 = restante % notaAtual2

        document.getElementById("res2").innerHTML = ` ${qtd2} nota(s) de ${notaAtual2}`
        if(restante2 != 0)
            for(var i = 0; i < notas.length; i++ ){
                if(restante2 >= notas[i]){
                        var notaAtual3 = notas[i]
                    }   
            }
            var qtd3 = Math.floor(restante2 / notaAtual3)
            var restante3 = restante2 % notaAtual3

            document.getElementById("res3").innerHTML = ` ${qtd3} nota(s) de ${notaAtual3}`
            if(restante3 != 0)
                for(var i = 0; i < notas.length; i++ ){
                    if(restante3 >= notas[i]){
                            var notaAtual4 = notas[i]
                        }   
                }
                var qtd4 = Math.floor(restante3 / notaAtual4)
                var restante4 = restante3 % notaAtual4

                document.getElementById("res4").innerHTML = ` ${qtd4} nota(s) de ${notaAtual4}`
                if(restante4 != 0)
                    for(var i = 0; i < notas.length; i++ ){
                        if(restante4 >= notas[i]){
                                var notaAtual5 = notas[i]
                            }   
                    }
                    var qtd5 = Math.floor(restante4 / notaAtual5)
                    var restante5 = restante4 % notaAtual5

                    document.getElementById("res5").innerHTML = ` ${qtd5} nota(s) de ${notaAtual5}`
    }
