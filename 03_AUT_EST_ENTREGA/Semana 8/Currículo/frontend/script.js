const vitor = {
    idade:17,
    nome:"Vitor",
    sobrenome:"Moura de Oliveira",
    email:"vitor.oliveira@sou.inteli.edu.br",
    telefone:"(11)996661198",
    nomeCompleto: function (){
        return this.nome + " " + this.sobrenome;
    } 
};

function json(){
    let url = '/info'
    let xhttp = new XMLHttpRequest()
    xhttp.open("get", url, false)
    xhttp.send()
    let data = JSON.parse(xhttp.responseText)[0]
    console.log(data)

    document.getElementById("nome").innerText = data.nome
    document.getElementById("email").innerText = data.email
    document.getElementById("cargo").innerText = data.cargo
}
console.log(vitor.nome)

function add() {
    linha.innerHTML = "Linha gerada por Javascript"
};


