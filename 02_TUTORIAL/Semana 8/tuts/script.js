api = 'http://127.0.0.1:3071'

$(document).ready(() => { //antes da minha pag carregar, mostra isso
    users.list();
});

var users = {
    list(){ //estruturo a lista
        $.ajax({ //comando do jquery para acessar um servidor (apenas um dos metodos de acessar o servidor)
            url: api + "/users",
            type: 'GET',
            success: resultado => {
                var texto =""; 
                resultado.forEach(linha => { //automaticamente pega o proximo item, como se fizesse o for com [i]
                    texto += '<div class="title">' + linha.title+'</div><BR>' //+= pq o loop adicionara mais coisa
                });
                $('#main').html(texto); //modifica o meu html

            }
        });
    }
};


//mais simples do que o .ajax
function usuarios()
{
    $.get(api+"/users", function(resultado){  // api = 'http://127.0.0.1:3071'
        var texto="";
        resultado.forEach(linha => {
            texto +='<div class="title">' +linha.title + '</div><BR>'
        });
        $('#main2').hmtl(texto);
    });
}