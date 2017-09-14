// Pekka Pousi

//kuvioni(1)
//* * * * *
// * * * * *
//* * * * *
// * * * * *
//* * * * *

//kuvioni(2)
//* * * * *
//*       *
//*       *
//*       *
//* * * * *

//kuvioni(3)
//* * * * *
// *     *
//  *   *
//   * *
//    *

// kuvioni(4)
//  *
// * *
//*   *
// * *
//  *

function kuvioni(shape){
    if(shape == 1){
        return  "* * * * *\n"+ 
                " * * * * *\n"+
                "* * * * *\n"+
                " * * * * *\n"+
                "* * * * *\n";

    }else if(shape == 2){
        return  "* * * * *\n"+
                "*       *\n"+
                "*       *\n"+
                "*       *\n"+
                "* * * * *\n";

    }else if(shape == 3){
        return  " * * * * *\n"+
                "  *     *\n"+
                "   *   *\n"+
                "    * *\n"+
                "     *\n";

    }else if(shape == 4){
        return  "  *\n"+
                " * *\n"+
                "*   *\n"+
                " * *\n"+
                "  * \n";
    // Vika ilmoitus eroaa tehtävän annon omasta, sillä käyttö tapahtuu window.promptin avulla.            
    }else{
        window.alert("Virheellinen syöte, ohjelma uudelleen käynnistyy.");
        return kuvioni(window.prompt("Syötä kuvion numero (1-4):"));
    }
}

kuvioni(window.prompt("Syötä kuvion numero (1-4):"))
