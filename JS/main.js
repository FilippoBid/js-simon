
let randomNumbers = [];
const h1Number = document.getElementById("randomN")


//creo una funzikne che mi genera un array di numeri casuali 
function randomNumArrayFunc (array){
    
    while (randomNumbers.length<5){
      let palceHolderNum = Math.floor(Math.random() * 100) + 1;
        if (!randomNumbers.includes (palceHolderNum) ){
            randomNumbers.push(palceHolderNum);
        }

    } 
    return randomNumbers;

}



//cancella lhtml chiede i valori con un prompt e lo confrontas a quelli dellarrayt
function clearh1andComapre(contenitore,arrayNumeriCasuali){
    contenitore.innerHTML= "";
    let check ="";
    num1 = prompt("inserisci il primo numero ");
    num2 = prompt("inserisci il secondo numero ") ;
    num3 = prompt("inserisci il terzo numero ") ;
    num4 = prompt("inserisci il quarto numero ") ;
    num5 = prompt("inserisci il quinto numero ") ;
    if(!arrayNumeriCasuali.includes(num1)){
        check = check + "uno";
    }
    if(!arrayNumeriCasuali.includes(num1)){
        check = check + "due";
    }
    if(!arrayNumeriCasuali.includes(num1)){
        check = check + "tre";
    }
    if(!arrayNumeriCasuali.includes(num1)){
        check = check + "quattro";
    }
    if(!arrayNumeriCasuali.includes(num1)){
        check = check + "cinque";
    }

    if(check=""){
        alert("hai indovinato tutti i numeri")
    }

}





randomNumArrayFunc(randomNumbers);
h1Number.innerHTML =randomNumbers 
setTimeout
