function analyseEleve(eleves){
    let bestStudent = eleves[0];
    let pass = 0;
    let recale = 0;
    if(eleves.length === 0){
        return("Erreur : Aucun élève !!!")
    }
    for(let i = 0; i < eleves.length; i++ ){
        if (eleves[i].note > bestStudent.note){
            bestStudent = eleves[i]
        }
        if (eleves[i].note >= 10){
            pass++
        } else{
            recale++
        }
    }
    const somme = eleves.reduce((acc, val) => acc + val.note, 0)
    const moyenne = somme / eleves.length
    return{
        moyenne,
        bestStudent,
        pass,
        recale,
    }
}