//ins
const doseInput = document.querySelector('#dose-input')
const brewRatio = document.querySelector('#brew-ratio')

//outs
const doseOutput = document.querySelector('#dose-output')
const brewRatioOutput = document.querySelector('#brew-output')
const waterOutput = document.querySelector('#water-output')

//event listener
document.querySelector("body").addEventListener("input", updateValues)

//event function
function updateValues(e){
  doseOutput.innerHTML = `With ${doseInput.value}g of coffee`
  brewRatioOutput.innerHTML = `To brew at ${brewRatio.value}g water : 1g coffee`
  waterOutput.innerHTML = `Use ${calculateWater(doseInput.value, brewRatio.value)} L of water`
}

//helper function
function calculateWater(dose, brewRatio){
  amountWater = dose*brewRatio/1000
  return amountWater
}
