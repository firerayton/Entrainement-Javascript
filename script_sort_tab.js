function analyseTableau(tab){
    let positifs = 0;
    let negatifs = 0;
    let nul = 0;
    let pairs = 0;
    let impairs = 0;
    for (let i = 0; i < tab.length; i++){
        let n = tab[i]
        if (typeof(n) !== "number"){
            return("Erreur : veuillez entrer uniquement des nombres.")
        }
        if (n < 0){
            negatifs++
        } else if (n > 0) {
            positifs++
        } else
            nul++
        if (n % 2 === 0){
            pairs++
        } else
            impairs++
    }
    const max = Math.max(...tab);
    const min = Math.min(...tab);
    const somme = tab.reduce((acc, val) => acc + val, 0);
    const moyenne = somme / tab.length ;
    return {
        positifs,
        negatifs,
        nul,
        pairs,
        impairs,
        max,
        min,
        moyenne,
    }
}