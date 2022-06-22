//EX1
function calcula(){
    res = document.getElementById("res");
    valor = document.getElementById("num").value;
    lista = valor.split("");

    if(lista.length == 3){
        centena = Number(lista[1]);
        par(centena);
    }else{
        res.innerText = "Coloque um número inteiro menor que 1000 e maior que 99.";
    };

    console.log(lista)
};

function par(centena){
    res = document.getElementById("res")
    if(centena % 2 == 0){
        res.innerText = "par";
    }else{
        res.innerText = "impar";
    };

};

//EX2
function somar(){
    valor1 = document.getElementById("text1").value;
    lista1 = valor1.split("");
    soma = 0;

    for(i=0; i < lista1.length; i++){
        soma += Number(lista1[i]);
    };
    console.log(soma);
};

//EX3
function ordem(){
    primeiroNome = document.getElementById("nom1").value;
    segundoNome = document.getElementById("nom2").value;
    terceiroNome = document.getElementById("nom3").value;
    res = document.getElementById("res3");

    listaNomes = [];
    
    listaNomes.push(primeiroNome);
    listaNomes.push(segundoNome);
    listaNomes.push(terceiroNome);
    resultado = listaNomes.sort();
    
    console.log(resultado);
    res.innerText = resultado;
};

//EX4
function fibonacci(){
    res = document.getElementById("res4");
    n = document.getElementById("numeroN").value;
    listaFibo = [];
    val1 = 0;
    val2 = 1; //fibo começa em 1
    somaVal = 1;


    for(i=1; i <= n; i++){ 
        listaFibo.push(somaVal);
        
        somaVal = val1 + val2;
        val1 = val2;
        val2 = somaVal;
    };

    res.innerText = listaFibo
    console.log(listaFibo);
};

//EX 5

function intervalo(){
    res = document.getElementById("res5");
    n1 = Number(document.getElementById("n1").value);
    n2 = Number(document.getElementById("n2").value);
    listaPrimos = [];
    
    for(i=n1; i <= n2; i++){
        inter = n1++
        console.log(inter)
        primo(inter)
        if(primo(inter) == true){
            listaPrimos.push(inter);
        };
    };
    
    res.innerText = listaPrimos
};

function primo(inter){
    for(i=2; i < inter; i++){
        if(inter % i == 0){
            return false;
        }else{
            return true;
        };  
    }
};

function teste(){
    console.log(primo(12))

}