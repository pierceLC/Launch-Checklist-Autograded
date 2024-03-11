require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
}

function validateInput(input) {
    if (input === "") {
       return "Empty";
    } else if (isNaN(input)) {
       return "Not a Number";
    } else {
       return "Is a Number";
    }
}

function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoMass) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    pilotStatus.textContent = `Pilot ${pilotName} is ready for launch`;
    copilotStatus.textContent = `Co-pilot ${copilotName} is ready for launch`;

    let hasFaultyItems = false;

    if (fuelLevel < 10000) {
        hasFaultyItems = true;
        fuelStatus.textContent = "Fuel level too low for launch";
    } else {
        fuelStatus.textContent = "Fuel level high enough for launch";
    }

    if (cargoMass > 10000) {
        hasFaultyItems = true;
        cargoStatus.textContent = "Cargo mass too heavy for launch";
    } else {
        cargoStatus.textContent = "Cargo mass low enough for launch";
    }
    
    if (hasFaultyItems) {
        list.style.visibility = "visible";
        launchStatus.style.color = "red"; 
        launchStatus.textContent = "Shuttle Not Ready for Launch";
    } else {
        list.style.visibility = "hidden";
        launchStatus.style.color = "green"; 
        launchStatus.textContent = "Shuttle is Ready for Launch";

        list.style.visibility = "visible";
    }
}


async function myFetch() {
    const planetsResponse = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    return planetsResponse.json();
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;