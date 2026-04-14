const chiffre = prompt("Donnez moi un chiffre entre 0 et 10")
if (chiffre > 0 && chiffre < 10){
    for(let i = chiffre; i >= 0; i--){
        console.log(i)
    }
} else {
    console.log("Votre valeur et éronné")
}