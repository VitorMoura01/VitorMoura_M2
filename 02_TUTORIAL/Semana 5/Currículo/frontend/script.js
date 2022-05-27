function json() {
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
    const info = Object.create(vitor);
    const json = JSON.stringify(info);
    console.log(info)
    console.log(json)
};

function add() {
    linha.innerHTML = "Linha gerada por Javascript"
};

