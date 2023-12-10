// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    // window.addEventListener("load", function(){
    //     if(testInput === ""){
    //         alert("All Fields are required");
    //     }
    // })
   if(testInput === ""){
     return "Empty";
   }
   if(isNaN(testInput)=== false){
     return "Is a Number";
   }
   if(isNaN(testInput)){
     return "Not a Number";
   }
}
document.getElementById("faultyItems")

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus")
 pilotStatus.innerHTML = `pilot ${pilot} Ready`
 copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;