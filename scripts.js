//HTML for changing content

import { recipeDivs } from "./recipes.js"
import { brewVariables } from "./brewVariables.js"

//-------------------------------------------------------------------------------------------

//change main content through menu

//targets for changing content
const aboutButton = document.querySelector("#about-button")
const brewVarButton = document.querySelector("#brew-var-button")
const methodButton = document.querySelector("#method-button")

//change to impact style display none
function changeMainContent(e){
  if(e.target && e.target == aboutButton){
    //display only about
    document.querySelector("#about").style.display = "grid"
    document.querySelector("#brewing-variables").style.display = "none"
    document.querySelector("#method").style.display = "none"
    //change button background-color to match content
    aboutButton.style.backgroundColor = "#5d1916"
    brewVarButton.style.backgroundColor = "#121212"
    methodButton.style.backgroundColor = "#121212"
  }
  else if(e.target && e.target == brewVarButton){
    //display only brew overview
    document.querySelector("#about").style.display = "none"
    document.querySelector("#brewing-variables").style.display = "grid"
    document.querySelector("#method").style.display = "none"
    //change button background-color to match content
    aboutButton.style.backgroundColor = "#121212"
    brewVarButton.style.backgroundColor = "#5d1916"
    methodButton.style.backgroundColor = "#121212"
  }
  else if(e.target && e.target == methodButton){
     //display only method
    document.querySelector("#about").style.display = "none"
    document.querySelector("#brewing-variables").style.display = "none"
    document.querySelector("#method").style.display = "grid"
    //change button background-color to match content
    aboutButton.style.backgroundColor = "#121212"
    brewVarButton.style.backgroundColor = "#121212"
    methodButton.style.backgroundColor = "#5d1916"
   
  }
}

//-------------------------------------------------------------------------------------------

// changing overview content

//targets for changing brew variable
const grindButton = document.querySelector("#grind-button")
const doseButton = document.querySelector("#dose-button")
const timeButton = document.querySelector("#time-button")
const temperatureButton = document.querySelector("#temperature-button")
const ingredientsButton = document.querySelector("#ingredients-button")

//output for brew variable
const brewingVarDisplay = document.querySelector("#var-display")

//change brew var content
function changeBrewVar(e){
  if(e.target && e.target == grindButton){
    brewingVarDisplay.innerHTML =  brewVariables['grind']
  }
  else if(e.target && e.target == doseButton){
    brewingVarDisplay.innerHTML =  brewVariables['dose']
  }
  else if(e.target && e.target == timeButton){
    brewingVarDisplay.innerHTML =  brewVariables['time']
  }
  else if(e.target && e.target == temperatureButton){
    brewingVarDisplay.innerHTML =  brewVariables['temperature']
  }
  else if(e.target && e.target == ingredientsButton){
    brewingVarDisplay.innerHTML =  brewVariables['ingredients']
  }
}

//-------------------------------------------------------------------------------------------

//changing method content

//targets for changing brew method
const dripSelector = document.querySelector("#drip-desc")
const fpSelector = document.querySelector("#fp-desc")
const coldbrewSelector = document.querySelector("#cold-brew")
const pouroverSelector = document.querySelector("#pourover-desc")

//output selected brew method
const recipe = document.querySelector("#recipe")

//change brew method
function changeBrewMethod(e){
  if(e.target && e.target == dripSelector){
    recipe.innerHTML = recipeDivs[0]
  }
  else if(e.target && e.target == fpSelector){
    recipe.innerHTML = recipeDivs[1]
  }
  else if(e.target && e.target == coldbrewSelector){
    recipe.innerHTML = recipeDivs[2]
  }
  else if(e.target && e.target == pouroverSelector){
    recipe.innerHTML = recipeDivs[3]
  }
}
//-------------------------------------------------------------------------------------------

//event listener
document.querySelector("body").addEventListener("click", change)

//-------------------------------------------------------------------------------------------

//event function
function change(e){
  changeMainContent(e)
  changeBrewVar(e)
  changeBrewMethod(e)
}