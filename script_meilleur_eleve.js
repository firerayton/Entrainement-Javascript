function analyseEleve(eleves){
    let bestStudent = eleves[0];
    let worstStudent = eleves[0];
    let pass = 0;
    let recale = 0;
    let mentions = [];
    if(eleves.length === 0){
        return("Erreur : Aucun élève !!!")
    }
    for(let i = 0; i < eleves.length; i++ ){
        let eleve = eleves[i];
        if (eleve.note > bestStudent.note){
            bestStudent = eleve
        }
        if (eleve.note < worstStudent.note){
            worstStudent = eleve
        }
        if (eleve.note >= 10){
            pass++
        } else{
            recale++
        }
        if(eleve.note >= 10){
            if (eleve.note === 10){
                mentions.push({
                    nom : eleve.nom,
                    mention : "Passable",
                })
            } else if (eleve.note < 16){
                mentions.push({
                    nom : eleve.nom,
                    mention : "Bien",
                })
            } else {
                mentions.push({
                    nom : eleve.nom,
                    mention : "Trés bien",
                })
            }
        } else {
            mentions.push({
                nom : eleve.nom,
                mention : "Insuffisant",
            })
        }
    }
    const somme = eleves.reduce((acc, val) => acc + val.note, 0)
    const moyenne = somme / eleves.length
    return{
        moyenne,
        bestStudent,
        worstStudent,
        pass,
        recale,
        mentions,
    }
}