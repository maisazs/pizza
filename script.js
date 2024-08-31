var slideElement = document.getElementById('laranja');
var btn = document.getElementById('lgn');
var isMovedRight = false;

function slideRight() {
    if (!isMovedRight) {
        slideElement.style.left = '50%';
        slideElement.style.borderRadius = '250px 0px 0px 250px';
        btn.textContent = 'CADASTRAR';
        isMovedRight = true;
    } else {
        slideElement.style.left = '0';
        slideElement.style.borderRadius = '0px 250px 250px 0px';
        btn.textContent = 'LOGIN';
        isMovedRight = false;
    }
}
