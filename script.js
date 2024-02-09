
document.addEventListener('DOMContentLoaded', function() {
    // alert('La page est complètement chargée !');  
    const boutonModifier = document.getElementById("submit");
    const Form = document.getElementById("form");   

    boutonModifier.addEventListener("click", function(event) {
        event.preventDefault();
        Form.style.display = "none";
      });
});



// Exercice Test
/*
let age = 25;
const name = 'Alice';

console.log(age*2);
console.log((age/3)*2);

if (age >= 18){
    console.log("C'est un adulte");
}else{
    console.log("C'est un mineur");
}

while(age != 0){
    console.log(age);
    age -= 1;
}
*/

// --------------------------------------------------------------------------------------
// EXOS FONDAMENTAUX


// Exercice 1
console.log("---- EXERCICE 1 ----\n")

function Somme(a, b){
    return a + b;
}
console.log(Somme(5, 10));

for (let i=0; i<11; i++){
    console.log(i);
}

for (let i=0; i<11; i++){
  if (i%2 == 0){
    console.log(i);
  }
}

// Exercice 2
console.log("---- EXERCICE 2 ----\n");

function CamelCase(phrase) {
  var Camel = "";
  for (let char = 0; char < phrase.length; char++) {
      let code = phrase[char].charCodeAt(0);
      if (phrase[char - 1] === " ") {
          Camel += phrase[char].toUpperCase();
      }else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        Camel += phrase[char];
    }
  }
  return Camel;
}

console.log(CamelCase("Est ce que c est bon pour vous"));

function DeleteImpair(liste){
    new_liste = [];
    for (let i=0; i<liste.length; i++){
        if(liste[i]%2 == 0){
          new_liste.push(liste[i]);
        }
    }
    return new_liste;
}

console.log(DeleteImpair([10,15,4,7,3,6,28]));