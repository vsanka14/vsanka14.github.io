document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById('loader').style.display = 'none';
    let popupImgs = document.getElementsByClassName('popup__img');
    for(let i=0; i<popupImgs.length; i++) {
        popupImgs[i].style.visibility = 'visible';
    }
});