function triangle(side1, side2.side3) {
    if (side1 == side2 && side1 != side3 || side1 == side3 && side1 != side2 || side2 == side3 && side1 != side3) {
        window.prompt("Kolmio on tasakylkinen.");

    } else if (side1 && side2 == side3) {
        window.prompt("Kolmio on tasasivuinen.")

    } else if (isNan(side1 || side2 || side3)) {
        window.prompt("Syötä kolmion kylkien pituudet numeroina, vitun urpo:");
        triangle(window.prompt("Ensimmäisen kyljen pituus:"), window.prompt("Toisen kyljen pituus:"),
            window.prompt("Kolmannen kyljen pituus:"));

    } else if (side1 != side2 && side1 != side3 && side2 != side3) {
        window.prompt("Kolmio ei ole tasasivuinen, eikä tasakylkinen.")
    }
}

window.prompt("Syötä kolmion kylkien pituudet numeroina, vitun urpo:");
triangle(window.prompt("Ensimmäisen kyljen pituus:"), window.prompt("Toisen kyljen pituus:"),
    window.prompt("Kolmannen kyljen pituus:"));


