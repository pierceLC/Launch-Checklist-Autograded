window.addEventListener("load", async function() {
    let listedPlanets = await myFetch();

    let randomPlanet = pickPlanet(listedPlanets);
    addDestinationInfo(
        document,
        randomPlanet.name,
        randomPlanet.diameter,
        randomPlanet.star,
        randomPlanet.distance,
        randomPlanet.moons,
        randomPlanet.image
    );

    document.querySelector("#launchForm form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        
        let pilotNameInput = document.querySelector("#launchForm [name='pilotName']");
        let copilotNameInput = document.querySelector("#launchForm [name='copilotName']");
        let fuelLevelInput = document.querySelector("#launchForm [name='fuelLevel']");
        let cargoMassInput = document.querySelector("#launchForm [name='cargoMass']");

        let pilotName = pilotNameInput.value;
        let copilotName = copilotNameInput.value;
        let fuelLevel = fuelLevelInput.value;
        let cargoMass = cargoMassInput.value;

        
        if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "" || isNaN(fuelLevel) || isNaN(cargoMass)) {
            alert("All fields are required. Please enter valid information in all fields.");
            return; 
        }

        formSubmission(document, document.getElementById("faultyItems"), pilotName, copilotName, fuelLevel, cargoMass);
        document.getElementById("faultyItems").style.visibility = "visible";
    });

    let faultyItems = document.getElementById("faultyItems");
    faultyItems.style.visibility = "visible";
});






