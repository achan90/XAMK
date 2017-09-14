//Pekka Pousi
//maks(-1, 1) antaa arvoksi 1 sillä se on suurempi, kuin -1
//maks(10*5, 1000/2) antaa arvoksi 500 sillä 1000/2 = 500 ja suurempi kuin 10*5, jonka tulos on 50




function maks(luku1, luku2){
    return Math.max(luku1, luku2);
}

// Funktio pilkkoo annetut muuttujat kahteen ryhmään,
// selvittää kummastakin ryhmästä suuremman muuttujan maks() funktiota käyttäen
// ja asettaa molemmista ryhmistä suuremman muuttujan uuden luomansa muuttujan arvoksi.
// Tämän jälkeen se kutsuu uudestaan maks() funktiota, selvittääkseen suuremman näistä kahdesta luodusta muuttujasta.
function maks4(luku1, luku2, luku3, luku4){
    var isompi1 = maks(luku1, luku2);
    var isompi2 = maks(luku3, luku4);

    return maks(isompi1, isompi2)
}

maks(1,-1)
//maks4(5,8,1000,99*99)