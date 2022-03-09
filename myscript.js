//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere
let chilometri = prompt("Chilometri di percorrenza?");

//Il programma dovrà chiedere all'utente l'età
let eta = prompt("Età del passeggero?");

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio:

//Il prezzo del biglietto è definito in base ai km (0.21 € al km)
let distanza = chilometri * 0.21;
console.log (distanza)

//sconto del 20% per i minorenni

if ( eta < 18 ) {
   let minorenni = distanza - (distanza * .20);
   var num = parseFloat(distanza).toFixed( 2 )
   console.log (minorenni)
}

//sconto del 40% per gli over 65

if ( eta > 65 ) {
    let anziani = distanza - (distanza * .40); 
    var num = parseFloat(distanza).toFixed( 2 );
    console.log (anziani);

}