
document.addEventListener('DOMContentLoaded', function() {
    // alert('La page est complètement chargée !');  
    const boutonModifier = document.getElementById("submit");
    const Form = document.getElementById("form");   

    boutonModifier.addEventListener("click", function(event) {
        event.preventDefault();
        Form.style.display = "none";
      });
});


