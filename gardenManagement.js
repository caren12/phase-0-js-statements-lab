const temperature = 90
const timeOfDay = "morning"
let soilMoisture = 30

// Temperature check

function temperatureCheck() {

    if  (temperature > 80) {

console.log("Watering on");

    } else {
        console.log("Watering off");
}
}

temperatureCheck()

// Time of day check

if (timeOfDay === "night") {

    console.log("Lights on")}

    else {
        console.log("Lights off")
}


//Soil moisture increase

while (soilMoisture < 40) {
    soilMoisture +=5;
    console.log(soilMoisture)

}



