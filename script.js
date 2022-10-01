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


document
    .getElementById("calculate")
    .addEventListener("click", totalResults)
    
    
function totalGrossResultFct() {
    totalGrossResult =((hourlyRate.value*hourQty.value) + (dailyRate.value*dayQty.value)+ (extrasRate.value*ExtraQty.value))
    totalGross.innerHTML=(totalGrossResult)+"€"
}
function totalTaxesResultFct() {
    totalTaxesResult= ((hourlyRate.value*hourQty.value) + (dailyRate.value*dayQty.value)+ (extrasRate.value*ExtraQty.value))/100 *taxes.value
    totalTaxes.innerHTML=(totalTaxesResult)+"€"
}
function totalNetResultFct() {
    totalGrossResult =((hourlyRate.value*hourQty.value) + (dailyRate.value*dayQty.value)+ (extrasRate.value*ExtraQty.value))
    totalTaxesResult= ((hourlyRate.value*hourQty.value) + (dailyRate.value*dayQty.value)+ (extrasRate.value*ExtraQty.value))/100 *taxes.value
    totalNet.innerHTML=((totalGrossResult-totalTaxesResult))+"€"
}

function totalResults(e) {
    e.preventDefault()
    totalGrossResultFct()
    totalTaxesResultFct()
    totalNetResultFct()
}