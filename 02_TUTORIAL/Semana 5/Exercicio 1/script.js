
function soma(){
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var soma = num1 + num2
    document.getElementById("res").innerHTML = soma
}

function sub(){
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var soma = num1 - num2
    document.getElementById("res").innerHTML = soma
}

function mul(){
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var soma = num1 * num2
    document.getElementById("res").innerHTML = soma
}

function divis(){
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var soma = num1 / num2
    document.getElementById("res").innerHTML = soma
}

function divisInt(){
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var soma = Math.round(num1 / num2)
    document.getElementById("res").innerHTML = soma
}

function resto(){
    var num1 = Number(document.getElementById("num1").value)
    var num2 = Number(document.getElementById("num2").value)
    var soma = num1 % num2
    document.getElementById("res").innerHTML = soma
}