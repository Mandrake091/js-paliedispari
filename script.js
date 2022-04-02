let appDiv = document.getElementById('app');

let containerPalindroma = document.getElementById('palindroma');
let containerPariDispari = document.getElementById('pariDispari');

//H1 benvenuto
const firstH1 = document.createElement('h1');
const textFirstH1 = document.createTextNode("Benvenutæ in questa pagina!");
firstH1.append(textFirstH1);

//Button pari dispari
const buttonPariDispari = document.createElement('button');
buttonPariDispari.setAttribute('class', 'btn btn-success mx-2');
buttonPariDispari.setAttribute('id', 'btnPariDispari');
const textButtonPariDispari = document.createTextNode("Pari & Dispari");
buttonPariDispari.appendChild(textButtonPariDispari);

//Button palindroma
const buttonPalindroma = document.createElement('button');
buttonPalindroma.setAttribute('class', 'btn btn-success mx-2');
buttonPalindroma.setAttribute('id', 'btnPalindroma');
const textButtonPalindroma = document.createTextNode("Palindroma?");
buttonPalindroma.appendChild(textButtonPalindroma);
//Button return
const buttonReturn=document.getElementById('return');
//Col
const col = document.createElement('div');
col.setAttribute('class', 'col-12 text-center');
col.append(firstH1);
col.append(buttonPariDispari);
col.append(buttonPalindroma);

//
const colResultPalindroma= document.getElementById('colResultPalindroma')


//Riga 
const row = document.createElement('div');
row.setAttribute('class', 'row');
row.append(col);

//Container
container.append(row);
appDiv.append(container);

//Funzione nascondi
//button pari dispari
document.getElementById("btnPariDispari").addEventListener("click", displayPariDispari);
function displayPariDispari() {
    containerPariDispari.classList.remove('d-none');
    col.classList.add("d-none");
    buttonReturn.classList.remove("d-none");
}
//button palindroma
document.getElementById("btnPalindroma").addEventListener("click", displayPalindroma);
function displayPalindroma() {
    containerPalindroma.classList.remove('d-none');
    col.classList.add("d-none");
    buttonReturn.classList.remove("d-none");
}
//button return
document.getElementById('return').addEventListener("click", indietro)
function indietro(){
    col.classList.remove("d-none");
    containerPariDispari.classList.add('d-none');
    containerPalindroma.classList.add('d-none');
}


////////////////////////



//Funzione che gira la parola
let text = document.getElementById('result');

let input = document.getElementById('input');


let button = document.getElementById("button").addEventListener("click", giraParola);


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
        text.innerText = (`La parola {${input.value}} è palindroma`);
       
    } else {
        text.innerText = (`La parola  { ${input.value} } non è palindroma`);
       
    }
    return parolaGirata;
}

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("button").click();
    }
  });
////////////////////////






let inputNumber = document.getElementById('inputNumber');

let textResult= document.getElementById('numberResult');

//ButtonDispari
let buttonDispari = document.getElementById('buttonDispari');
buttonDispari.addEventListener('click', isOdd);

//ButtonPari
let buttonPari = document.getElementById('buttonPari');
buttonPari.addEventListener('click', isEven);


function isOdd() {
    let randomNumberCpu = Math.floor(Math.random() * 5 + 1);

    if (Number(inputNumber.value > 5)) {
        textResult.innerText = (`Inserisci un numero minore di 5!`);
    } else if (((Number(inputNumber.value) + randomNumberCpu) % 2 !== 0)) {
        textResult.innerText = (`La somma di ${randomNumberCpu} + ${(Number(inputNumber.value))} è Dispari. Hai vinto!`);
    } else {
        textResult.innerText = (`La somma di ${randomNumberCpu} + ${(Number(inputNumber.value))} è Pari. Hai Perso!`);
    }
}

function isEven(){
    let randomNumberCpu = Math.floor(Math.random() * 5 + 1);

    if (Number(inputNumber.value > 5)) {
        textResult.innerText = (`Inserisci un numero minore di 5!`);
    } else if (((Number(inputNumber.value) + randomNumberCpu) % 2 == 0)) {
        textResult.innerText = (`La somma di ${randomNumberCpu} + ${(Number(inputNumber.value))} è Pari. Hai vinto!`);
    } else {
        textResult.innerText = (`La somma di ${randomNumberCpu} + ${(Number(inputNumber.value))} è Dispari. Hai Perso!`);
    }
}




