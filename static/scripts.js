/* <label for="dose-input">Dose</label>
<input id="dose-input" type="range" min="0" max="100" value="22">
<label for="brew-ratio">Brew Ratio</label>
<input id="brew-ratio" type="range" min="0" max="20" value="16">
<p id="dose-output"></p> 
<p id="brew-output"></p>
<p id="water-output"></p>
*/

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
