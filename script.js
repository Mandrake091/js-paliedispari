/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma



Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/





let button = document.getElementById("button").addEventListener("click", giraParola);

let h1 = document.getElementById('result');

let input = document.getElementById('input');


//funziona!
function getvalue() {
    console.log('ciao' + input.value)
}
////////////


function giraParola(parola) {
    console.log(input.value);
    letters = input.value.split('');
    console.log(letters);
    let parolaGirata = '';


    for (let i = letters.length - 1; i >= 0; i--) {
        parolaGirata += letters[i];
    }
    console.log(parolaGirata);

    if (input.value == parolaGirata) {
        h1.innerText = (`La parola ${input.value} è palindroma`);
    } else {
        h1.innerText = (`La parola ${input.value} non è palindroma`);
    }
    return parolaGirata;
}

input.addEventListener("keyup", function (event) {

    if (event.keyCode === 13) {

        event.preventDefault();

        button = document.getElementById("button").click();
    }
})