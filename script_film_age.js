const year = 2026
const birthyear = prompt("En quelle année êtes-vous né ?");
const age = year - birthyear;
film1 = "Lilo et Stitch";
film2 = "Matrix";
film3 = "Evil Dead";
const meilleurfilm = " est le meilleur film pour vous";
if (age <=13){
    console.log(film1 + meilleurfilm);
} else if (age < 18){
    console.log(film2 + meilleurfilm);
} else {
    console.log(film3 + meilleurfilm);
}