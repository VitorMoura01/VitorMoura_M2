function ordenar(){
    var pos = 0;
    var text = document.getElementById("lista").value;
    var lista = text.split(',');
    var foco = lista[pos];
    var resultado = 0;

    lista.sort((a,b)=>a-b);
    /*resultado =  lista.indexOf(foco) + 1;*/
    for(var i = 0; i < lista.length; i++ ){
        if(lista[i] == foco){
            resultado = i + 1;
        };
    };
    document.getElementById("valorFoco").innerHTML = ` Sendo o valor foco ${foco}, a sua posição ao ordenar a lista será ${resultado}º`
    console.log(lista);
    console.log(foco);
    console.log(resultado);

}