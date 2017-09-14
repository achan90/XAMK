/*Pekka Pousi
*/


//Määrittää tikkujen alkumäärän.
var alkuMaara = 21

//Varmistaa joka kierroksella poistuvan 4 tikkua, jolloin ohjelma ei voi hävitä.
function pakotaNelja(x){
	return 4 - x;
}

function siirto(nykyMaara, otan){
	//Mikäli käyttäjä joutuu ottamaan viimeisen tikun, häviää hän pelin.
	//otan < 4 ehto, estää peliä päättymästä liian aikaisin (esim vahingossa 22 tikkua ottaessa) 
	if (nykyMaara - otan < 1 && otan < 4){
			return alert("Hävisit pelin!");
	}else{
		//Laskee tikkujen tämän hetkisen määrän ja määrittelee kuinka monta tikkua ohjelma ottaa.
		var uusiMaara = nykyMaara - otan;
		var koneOttaa = pakotaNelja(otan);
		  
		//Hyväksyy ainoastaan tietyt syötteet pelaajan ottamien tikkujen määräksi.
		if(otan == 1 || otan == 2 || otan == 3){			
			nykyMaara = uusiMaara - koneOttaa;
			
			//Tunnistaa ohjelman "voitto ehdot" ja ratkaisee pelin ohjelman hyväksi.
			if(nykyMaara == 2 || nykyMaara == 3 || nykyMaara == 4){
				
				if(nykyMaara == 2){
					return siirto(nykyMaara, 1);
					
				}else if(nykyMaara == 3){
					return siirto(nykyMaara, 2);
					
				}else if (nykyMaara == 4){
					return siirto(nykyMaara, 3);	
				}
			
			//Ilmoittaa tämän hetkisen tikkujen määrän ja uudelleen kutsuu funktion päivitetyillä parametreilla.
			}else{
				return siirto(nykyMaara, parseInt(prompt("Kone otti " + koneOttaa + " Jäljellä on: " + nykyMaara
					+"\nKuinka monta tikkua otat? (1-3)")));
			}
		
		//Pyytää uudet syötteet tarpeen vaatiessa.
  		}else{
			otan = parseInt(prompt("Otapa uudestaan!"));
			siirto(nykyMaara, otan);
		}	
	}
}

//Käynnistää funktion ja kysyy käyttäjältä monta tikkua hän ottaa.
siirto(alkuMaara, parseInt(prompt("Kuinka monta tikkua otat? (1-3)")));
