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

//Bouton calculer
document
    .getElementById("calculate")
    .addEventListener("click", totalResults)
    
//Calcul du brut    
function totalGrossResultFct() {
    totalGrossResult=((hourlyRate.value*hourQty.value) + (dailyRate.value*dayQty.value)+ (extrasRate.value*ExtraQty.value))
    totalGross.innerHTML=(totalGrossResult.toFixed(2))+"€"
}
//Calcul des taxes
function totalTaxesResultFct() {
    totalTaxesResult= ((hourlyRate.value*hourQty.value) + (dailyRate.value*dayQty.value)+ (extrasRate.value*ExtraQty.value))/100 *taxes.value
    totalTaxes.innerHTML=(totalTaxesResult.toFixed(2))+"€"
}
//Calcul du net
function totalNetResultFct() {
    totalGrossResult =((hourlyRate.value*hourQty.value) + (dailyRate.value*dayQty.value)+ (extrasRate.value*ExtraQty.value))
    totalTaxesResult= ((hourlyRate.value*hourQty.value) + (dailyRate.value*dayQty.value)+ (extrasRate.value*ExtraQty.value))/100 *taxes.value
    totalNet.innerHTML=((totalGrossResult.toFixed(2)-totalTaxesResult.toFixed(2)))+"€"
}
//Fonction qui synchronise toutes les autres
function totalResults(e) {
    e.preventDefault()
    totalGrossResultFct()
    totalTaxesResultFct()
    totalNetResultFct()
}

let inputs = document.querySelectorAll("input")

//Detecte les changements de valeur et met à jour les totaux
inputs.forEach(element => {
    element.addEventListener("keyup", totalResults),
    element.addEventListener("change", totalResults)
})
document
    .getElementById("taxes")
    .addEventListener("keyup", totalResults),
    addEventListener("change", totalResults)