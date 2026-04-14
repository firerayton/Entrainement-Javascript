function analyseTableau(tab){
    let positifs = 0;
    let negatifs = 0;
    let pairs = 0;
    let impairs = 0;
    for (let i = 0; i < tab.length; i++){
        let n = tab[i]
        if (typeof(tab[i]) !== "number"){
            return("Erreur : veuillez entrer uniquement des nombres.")
        }
        if (n < 0){
            negatifs++
        }
        if (n > 0) {
            positifs++
        }
        if (n % 2 === 0){
            pairs++
        } else
            impairs++
    }
    return {
        positifs,
        negatifs,
        pairs,
        impairs
    }
}