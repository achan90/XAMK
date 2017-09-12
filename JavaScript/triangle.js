function triangle(side1, side2, side3) {
    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        window.alert("Virheelliset syötteet, ohjelma uudelleen käynnistyy.");
        triangle(window.prompt("Ensimmäisen kyljen pituus:"), 
            window.prompt("Toisen kyljen pituus:"),window.prompt("Kolmannen kyljen pituus:"));
    }else{
        if (side1 == side2 && side1 != side3 || side1 == side3 && side1 != side2 || side2 == side3 && side1 != side3) {
            window.alert("Kolmio on tasakylkinen.");

        } else if (side1 && side2 == side3) {
            window.alert("Kolmio on tasasivuinen.")

        } else if (side1 != side2 && side1 != side3 && side2 != side3) {
            window.alert("Kolmio ei ole tasasivuinen, eikä tasakylkinen.")
        }
    }
}

window.alert("Syötä kolmion kylkien pituudet numeroina");
triangle(window.prompt("Ensimmäisen kyljen pituus:"), window.prompt("Toisen kyljen pituus:"),
    window.prompt("Kolmannen kyljen pituus:"))
