document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById('loader').style.display = 'none';
    document.getElementsByClassName('popup__img').forEach(element=>{
        element.style.visibility = 'visible';
    });
});