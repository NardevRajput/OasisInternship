function convertToCelsius() {
    var celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        alert("Please enter a value for Celsius.");
        return;
    }
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultFahrenheit").innerHTML = "Result: " + fahrenheit.toFixed(2) + " °F";
}

function convertToFahrenheit() {
    var fahrenheit = document.getElementById("fahrenheit").value;
    if (fahrenheit === "") {
        alert("Please enter a value for Fahrenheit.");
        return;
    }
    var celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("resultCelsius").innerHTML = "Result: " + celsius.toFixed(2) + " °C";
}
