//Déclaration des constantes
const form = document.getElementById("form")

const hourlyRate = form.elements["hourlyRate"]
const dailyRate = form.elements["dailyRate"]
const extrasRate = form.elements["extrasRate"]

const hourQty = form.elements["hourQty"]
const dayQty = form.elements["dayQty"]
const ExtraQty = form.elements["ExtraQty"]

const taxes = form.elements["taxes"]

const totalGross = document.getElementById("totalGross")
const totalTaxes = document.getElementById("totalTaxes")
const totalNet = document.getElementById("totalNet")

//Selectionne tous les champs inputs
let inputs = document.querySelectorAll("input")



function totalResults(e) {
    //déclarations des totaux
let totalGrossResult = ((hourlyRate.value*hourQty.value) + (dailyRate.value*dayQty.value)+ (extrasRate.value*ExtraQty.value))
let totalTaxesResult= ((hourlyRate.value*hourQty.value) + (dailyRate.value*dayQty.value)+ (extrasRate.value*ExtraQty.value))/100 *taxes.value
let totalNetResult = totalGrossResult-totalTaxesResult

    //Calcul du brut    
        totalGross.innerHTML=(totalGrossResult.toFixed(2))+"€"
    //Calcul des taxes
        totalTaxes.innerHTML=(totalTaxesResult.toFixed(2))+"€"
    //Calcul du net
         totalNet.innerHTML= totalNetResult.toFixed(2)+"€"
        
    e.preventDefault()

//Prevents user from entering negative value
inputs.forEach(element => {
    if (element.value < 0) {
        element.value = 0
    }})
}



//Detecte les changements de valeur et met à jour les totaux
inputs.forEach(element => {
    element.addEventListener("keyup", totalResults),
    element.addEventListener("change", totalResults)
})

document
    .getElementById("taxes")
    .addEventListener("keyup", totalResults),
    addEventListener("change", totalResults)

//Bouton calculer
document
    .getElementById("calculate")
    .addEventListener("click", totalResults)
