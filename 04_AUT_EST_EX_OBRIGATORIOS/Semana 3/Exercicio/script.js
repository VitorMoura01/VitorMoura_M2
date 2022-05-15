function calc() {
    const g = 10
    var resposta = document.getElementById("resposta")
    var vel = Number(document.getElementById("vel").value)
    var alt = ((vel**2)/(2*g))
    var tempo = (vel/g)

    resposta.innerHTML = `Levando em conta uma velocidade inicial de ${vel} m/s, o tempo de subida será de ${tempo} segundos e altura máxima será de ${alt} metros.`
}