var listaDeAlunos = [];

var Aluno = {
    nomeAluno: "",
    periodoAluno: 0
}

function adicionarAlunoLista(){
    //Pega do documento html o valor inserido no input
    var nome = document.getElementById("nomeAluno").value;
    var periodo = document.getElementById("periodoaluno").value;
    //
    var a1 = Object.create(Aluno);
    a1.nomeAluno = nome;
    a1.periodoAluno = periodo;
    listaDeAlunos.push(a1);

}

function mostraAluno(){
    var listaalunosHTML = "";
    for(var i=0; i<listaDeAlunos.length ; i++){
        listaDeAlunos += listaDeAlunos[i].nomeAluno + " - " +
                         String(listaDeAlunos[i].periodoAluno + "</br>");
                         mostraAluno
    }
    document.getElementById("saidaalunos").innerHTML = listaalunosHTML;
}
