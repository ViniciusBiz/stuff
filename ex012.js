var agora = new Date()
var hora = agora.getYe()
var minuto = agora.getMinutes()
console.log(`São exatamente ${hora} horas e ${minuto} minutos. Horário oficial do óleo de macaco.`)
if (hora < 12) {
    console.log("Bom dia!")

} else if (hora <=18) {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}