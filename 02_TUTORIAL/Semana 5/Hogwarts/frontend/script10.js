var Disciplina = {
    nomeDisciplina: "",
    pesoG: 1,
    pesoS: 1,
    pesoC: 1,
    pesoL: 1 ,
    listaNotas: [],
    geraNotas: function(nmrNotas){
        for(var j=0; j < nmrNotas; j++){
            var notaAleatorio = Math.floor(Math.random()* 10) + 1;
            this.listaNotas.push(notaAleatorio)
        }
    }
    calcularMediaDis: function(){
        var total = 0;
        for(var i=0; i < this.listaNomes.length ; i++){
            total += this.listaNotas[i];
        };
        return
    }
};
var listaDisciplinas = [];

function adicionarDisciplina(){
    var disciplina = Object.create(Disciplina);
    disciplina.nomeDisciplina = document.getElementById("#nomeDis").value;
    disciplina.pesoG = Number(document.getElementById("#pesoG")).value;
    disciplina.pesoS = Number(document.getElementById("#pesoS")).value;
    disciplina.pesoC = Number(document.getElementById("#pesoC")).value;
    disciplina.pesoL = Number(document.getElementById("#pesoL")).value;
    listaDisciplinas.push(disciplina);

};

function calcularMediasDisciplinas(lista){
    
};

function calculaMediaCasa(nmrcasa){

};

function geraNotas(){

};

function adicionarDisciplina(){
    alert("funcao Adicionar");
};

function calcular(){
    alert("comi o cu de quem ta lendo");
};

function geraJSON(){
    alert("aaaaaaaa");
    console.log(listaDisciplinas);
};