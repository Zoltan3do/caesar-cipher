/*
Uno dei più semplici e più conosciuti cifrari è il cifrario di Cesare, noto anche come cifrario a scorrimento. In un cifrario a scorrimento i significati delle lettere sono spostati di un certo numero di posizioni.

Un comune uso moderno è il cifrario ROT13, dove i valori delle lettere sono shiftati di 13 posizioni. Così A ↔ N, B ↔ O e così via.

Scrivi una funzione che prende come input una stringa cifrata con ROT13 e restituisce una stringa decodificata.

Tutte le lettere saranno maiuscole. Non trasformare alcun carattere non alfabetico (cioè spazi, punteggiatura), ma passali come sono.

 */

function rot13(str) {

    let ris = "";
    let lettere = [
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
    ];

    for(let char of str){
        if(/[A-Z]/.test(char) === false){
            ris += char;
        }else{
            for(let i = 0; i < lettere.length; i++){
                if(char === lettere[i]){
                    if(lettere[i - 13] != undefined){
                        ris += lettere[i - 13];
                    }else{
                        let count = 1;
                        for(let j = i; j > 0; j--){
                            count++;
                        }
                        ris += lettere [(lettere.length - 1) - (13 - count)];
                    }
                }
            }
        }
    }

    return ris;
}


console.log(rot13("SERR PBQR PNZC"));// dovrebbe decodificare la stringa FREE CODE CAMP 
// Cifrario di Cesare
