//EX1
function aumenta(){
    valor = Number(document.getElementById("num").value)
    valor++
    document.getElementById("res").innerHTML = valor

    console.log(valor)
};

function diminui(){
    valor = Number(document.getElementById("num").value)
    valor--
    document.getElementById("res").innerHTML = valor

    console.log(valor)
};

//EX2
function trocar(){
    text1 = (document.getElementById("text1").value)
    text2 = (document.getElementById("text2").value)

    document.getElementById("res2").innerText = (text2) + " " + (text1);
};

//EX3
function validar(){
    cel = (document.getElementById("cel").value);
    const regex = /\(\d{2}\)\d{5}-\d{4}/;
    valida = regex.exec(cel);

    if(valida){
        num = valida[0];
        console.log(num)
        document.getElementById("res3").style.color = "green"
        document.getElementById("res3").innerText = "Correto" + " " + (num);
    } else{
        window.alert("Insira o seu numero corretamente ");
    };
};

//EX4
function verificar(){
    per = document.getElementsByName("radPeriodo")
    pessoas = Number(document.getElementById("pessoas").value)
    periodo = ''

    if(per[0].checked){
        periodo = "diurno"
        preco = pessoas * 200
        if(pessoas > 50){
            preco = preco * 0.4
            console.log(preco)
            document.getElementById("res4").innerText = "$" + (preco) + " com desconto de 40%";
        } else {
            document.getElementById("res4").innerText = "$" + (preco) + " sem desconto";
        }

    }else if(per[1].checked){
        periodo = "noturno"
        preco = pessoas * 100
        if(pessoas > 50){
            preco = preco * 0.2
            console.log(preco)
            document.getElementById("res4").innerText = "$" + (preco) + " com desconto de 20%";
        } else {
            document.getElementById("res4").innerText = "$" + (preco) + " sem desconto";
        }
    }

    console.log(periodo)
};

//EX 5

function alunos() {
    var qtdAlunos = Number(document.getElementById("alunos").value); 
    var texto = "";

    for ( i = 0 ; i<qtdAlunos ; i++ ){
        texto += '<p>Aluno ' + i + ' :</p><input type="number" placeholder="trabalho" class="trabalho input"></input>' + '<input type="number" placeholder= "prova" class="prova input"></input><br>';
    }
    $("#inputs").append(texto);
}

function medias() {
    let qtdAlunos = Number(document.getElementById("alunos").value); 
    var somaTrabalhos = 0; 
    var somaProvas = 0;
    var valoresProvas = [];
    var valoresTrabalhos = [];  
    var medias = [];
    var mediaGeral = 0;
    var i = 0;
    var j = 0;
    
    //Soma Provas e Trabalhos
    $(".trabalho").each(function(){
        valoresTrabalhos[i] = parseFloat(this.value); //para cada input com id trabalho, pegar o valor
        somaTrabalhos += parseFloat(this.value); //para cada input com id trabalho, soma-los
        i++; //++ ao index para analisar o proximo input
    });
    
    $(".prova").each(function(){
        valoresProvas[j] = parseFloat(this.value);
        somaProvas += parseFloat(this.value);
        j++;
    });  
    //

    var mediaProvas = somaProvas/qtdAlunos;
    var mediaTrabalhos = somaTrabalhos/qtdAlunos;

    // Menor Prova e Menor Trabalho
    valoresTrabalhos.sort((a,b)=>a-b); //coloca as notas do trabalho em ordem crescente
    valoresProvas.sort((a,b)=>a-b); //coloca as notas das provas em ordem crescente
    var maiorTr = valoresTrabalhos[(valoresTrabalhos.length - 1)]; //pega o ultimo valor do array
    var maiorPr = valoresProvas[(valoresProvas.length - 1)];
    var menorTr = valoresTrabalhos[0];
    var menorPr = valoresProvas[0];
    //

    //Media individual e Geral
    for (let k = 0; k < qtdAlunos ; k++) { //laço para preencher o array de medias, somar os valores para a media geral e avaliar quais sao os menores e maiores valores, sendo aproveitado para printar todas as medias na tela.
        //media geral
        medias[k] = ((valoresTrabalhos[k] * 3) + ( valoresProvas[k] * 2)) / 5; //media ponderada por aluno
        mediaGeral += medias[k]; //soma das medias 
        $("#res5").append("Média Aluno "+ k +": ",medias[k], "<br>");

    }

    mediaGeral = parseFloat(mediaGeral/qtdAlunos); //calcular a media geral de todos os alunos
    //

    $("#res5").append("Média geral: ",mediaGeral, 
                        "<br>Média dos trabalhos: ",mediaTrabalhos, 
                        "<br>Média dos provas: ",mediaProvas, 
                        "<br>Menor trabalho: ",menorTr,"<br>Menor prova: ",menorPr, 
                        "<br>Maior prova: ",maiorPr,"<br>Maior trabalho: ",maiorTr);

    console.log("soma dos trabalhos: ", somaTrabalhos);
    console.log("soma dos provas: ",somaProvas);
    console.log("qtdAlunos: ",qtdAlunos, typeof(qtdAlunos));
    console.log("array dos trabalhos: ",valoresTrabalhos);
    console.log("array dos provas: ",valoresProvas);
    console.log("medias individuais",medias);
    console.log("media geral: ",mediaGeral);    
    console.log("media dos trabalhos: ",mediaTrabalhos);
    console.log("media dos provas: ",mediaProvas);
    console.log("Menor trabalho: ",menorTr);
    console.log("Menor prova: ",menorPr);
    console.log("Maior trabalho: ",maiorTr);
    console.log("Maior prova: ",maiorPr); 
}