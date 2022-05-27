function ordenar(){
    var text = document.getElementById("lista").value;
    var lista = text.split(',');
    var foco = lista[0]; /* usará o primeiro valor inserido na lista como valor foco*/
    var resultado = 0;

    lista.sort((a,b)=>a-b);
    for(var i = 0; i < lista.length; i++ ){ /* verifica em loop os numeros da lista até achar o valor foco */
        if(lista[i] == foco){
            resultado = i + 1; /* o resultado será igual a posição do valor foco + 1*/
        };
    };
    console.log(lista);
    console.log(foco);
    console.log(resultado);
    document.getElementById("valorFoco").innerHTML = ` Sendo o valor foco ${foco}, a sua posição ao ordenar a lista será ${resultado}º`
}