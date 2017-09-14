//Pekka Pousi

function pakotaNelja(x){
	if(x == 1){
		return 3;
		
	}else if(x == 2){
		return 2;
	
	}else if(x == 3){
		return 1;
	}
}

function siirto(nykyMaara, otan){
	if(nykyMaara > 1){
		var uusiMaara = nykyMaara - otan;
		var koneOttaa = pakotaNelja(otan);
  		
		if(nykyMaara == 2 | nykyMaara == 3 | nykyMaara == 4){
			
			if(nykyMaara == 2){
				siirto(nykyMaara, 1);
				
			}else if(nykyMaara == 3){
				siirto(nykyMaara, 2);
				
			}else if (nykyMaara == 4){
				siirto(nykyMaara, 3);	
			}
		}
		}else if(otan == 1 | otan == 2 | otan == 3){			
			nykyMaara = uusiMaara - koneOttaa;			
			siirto(nykyMaara, parseInt(prompt("Kone otti " + koneOttaa + " Jäljellä on: " + nykyMaara
					+"\nKuinka monta tikkua otat? (1-3)")))
		
  		}else{
    	return siirto(uusiMaara, prompt("Otapa uudestaan!"))}

	}else{
		return alert("Hävisit pelin!");
	}
}
siirto(21, parseInt(prompt("Kuinka monta tikkua otat? (1-3)")));
