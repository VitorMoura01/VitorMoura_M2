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
    let url = '/info' //endpoint
    let xhttp = new XMLHttpRequest() //script faz o request para o servidor a partir do URL usando o protocolo http, sem ter q atualizar a pag
    xhttp.open("get", url, false) //define o metódo do request (/get), o endpoint (url), async ou n
    xhttp.send() //envia o request
    let data = JSON.parse(xhttp.responseText)[0] //retorna a resposta em forma de texto (tem q transformar em JSON para poder consultar atributos especificos como .nome; .idade)
    console.log(data)

    document.getElementById("nome").innerText = data.nome //bota no html
    document.getElementById("email").innerText = data.email
    document.getElementById("cargo").innerText = data.cargo
}
console.log(vitor.nome)

function add() {
    linha.innerHTML = "Linha gerada por Javascript"
};


