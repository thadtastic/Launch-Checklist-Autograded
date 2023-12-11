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
    if (testInput === "") {
        return "Empty";
    }
    else if (isNaN(testInput) === false) {
        return "Is a Number";
    }
    else {
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    //figure how to use validateinput function here???
    
    let validatedPilot = validateInput(pilot);
    let validatedCopilot = validateInput(copilot);
    let validatedFuellevel = validateInput(fuelLevel);
    let validatedCargolevel = validateInput(cargoLevel);

    if (validatedPilot === "Empty" || validatedCopilot === "Empty" || validatedFuellevel === "Empty" || validatedCargolevel === "Empty" ){
        alert("All Fields are Required!");
    }

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`

    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    if (fuelLevel < 10000) {
        list.style.visibility = "visible"
        fuelStatus.innerHTML = `Fuel level too low for launch`
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`
        launchStatus.style.color = "red"

    }
    cargoStatus = document.getElementById("cargoStatus")
    if (cargoLevel > 10000) {
        list.style.visibility = "visible"
        cargoStatus.innerHTML = `Cargo mass too heavy for launch`
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`
        launchStatus.style.color = "red"
    }    
    if(fuelLevel >= 10000 && cargoLevel <= 10000) {
        list.style.visibility = "visible"
        launchStatus.innerHTML = `Shuttle is Ready for Launch`
        launchStatus.style.color = "green"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        fuelStatus.innerHTML = "Fuel level high enough for launch"


    }
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