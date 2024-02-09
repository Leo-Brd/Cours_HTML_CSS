
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


// Exos Fondamentaux


