/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtraParolePerIniziale(array, lettera){
    return array.filter(nome => nome.startsWith(lettera));
}

// Invoca la funzione qui e stampa il risultato in console
const risultato = filtraParolePerIniziale(names, "A");
console.log (risultato);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]