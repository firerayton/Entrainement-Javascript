function pair(n) {
    if (!Number.isInteger(n)){
        return("Votre nombre n'est pas un entier")
    }
    if (n % 2 === 0){
        return("Pair")
    } else{
        return("Impair")
    }
}
