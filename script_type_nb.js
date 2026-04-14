function analyseNombre(n){
    if (typeof(n) !== "number"){
        return("Erreur : veuillez entrer un nombre.")
    }
    if (!Number.isInteger(n)){
        return("Erreur : ce n'est pas un entier")
    }
    if (n === 0){
        return("Votre nombre est zéro")
    }
    if (n < 0 && n % 2 === 0){
        return("Votre nombre est NEGATIF et PAIR")
    } else if(n < 0){
        return("Votre nombre est NEGATIF et IMPAIR")
    }
    if (n > 0 && n % 2 === 0){
        return("Votre nombre est POSITIF et PAIR")
    } else if(n > 0){
        return("Votre nombre est POSITIF et IMPAIR")
    }
}