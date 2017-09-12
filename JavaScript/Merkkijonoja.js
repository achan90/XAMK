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
        window.alert(
            "* * * * *\n"+ 
            " * * * * *\n"+
            "* * * * *\n"+
            " * * * * *\n"+
            "* * * * *\n");
            return "* * * * *\n * * * * *\n* * * * * \n * * * * *\n* * * * *";

    }else if(shape == 2){
        window.alert(
            "* * * * *\n"+
            "*         *\n"+
            "*         *\n"+
            "*         *\n"+
            "* * * * *\n");
            return "* * * * * \n*       *\n*       *\n*       *\n* * * * *";

    }else if(shape == 3){
        window.alert(
            "* * * * *\n"+
            "  *     *\n"+
            "   *   *\n"+
            "    * *\n"+
            "     *\n");
            return "* * * * *\n *     *\n  *   *\n   * *\n    *"

    }else if(shape == 4){
        window.alert(
            "  *\n"+
            " * *\n"+
            "*   *\n"+
            " * *\n"+
            "  * \n");
            return "  *\n * *\n*   *\n * *\n  *"
    }else{
        return "*** Käyttö: kuvioni(x), missä x = 1,...4.";
    }
}

kuvioni(4)
//vaihtoehtoinen käyttötapa: kuvioni(window.prompt("Syötä kuvion numero (1-4):"))
