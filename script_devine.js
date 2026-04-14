const myst_num = 8
let guess
while (guess !== myst_num){
    const guess = prompt ("Deviner mon chiffre") *1
    if (guess > myst_num){
        console.log("moins")
    } else if (guess < myst_num){
        console.log("plus")
    } else if (guess !== myst_num){
        console.log("Votre valeur n'est pas un chiffre")
    } else
    break
}
console.log("Félicitation, " + myst_num + " est bien le chiffre mystère !!!")