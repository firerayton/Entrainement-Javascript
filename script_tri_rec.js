let long_1 = prompt("Quel est la valeur de la longueur AB ?");
let long_2 = prompt("Quel est la valeur de le longueur AC ?");
let long_3 = prompt("Quel est la valeur de la longueur BC ?");
let list = [long_1, long_2, long_3];
list = list.sort((a, b) => a - b);
list = list.reverse();
let A = list[0];
let B = list[1];
let C = list[2];
if (B*B + C*C === A*A ){
    console.log("le triangle formé par ces 3 points est rectangle !!!")
} else {
    console.log("le triangle formé par ces 3 points n'est pas rectangle.")
}




//codingames