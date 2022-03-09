//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
let chilometri = prompt("Chilometri di percorrenza?");

//Il programma dovrà chiedere all'utente l'età
let eta = prompt("Età del passeggero?");

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio:

//Il prezzo del biglietto è definito in base ai km (0.21 € al km)
let distanza = chilometri * 0.21;
console.log (distanza)

//sconto del 20% per i minorenni

let minorenni = distanza - (distanza * .20);
let prezzoMinori = parseFloat (minorenni).toFixed(2);
console.log (prezzoMinori);


//sconto del 40% per gli over 65


let anziani = distanza - (distanza * .40); 
let prezzoAnziani = parseFloat(anziani).toFixed(2);
console.log (prezzoAnziani);


if ( eta < 18 ) {
    document.getElementById("ridotto").innerHTML = `Costo biglietto ridotto minorenni = ${prezzoMinori} €` ;
 }else if ( eta > 65) {
    document.getElementById("anziani").innerHTML = `Costo biglietto ridotto over 65 = ${prezzoAnziani} €` ;
  }else{
    document.getElementById("prezzo").innerHTML = `Costo biglietto = ${distanza} €` ;
  }
  

 





