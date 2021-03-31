var toggleButton = document.getElementById ('toggle-btn'); 
toggleButton.addEventListener("click", function () {
    var body = document.querySelector('body')
    body.classList.toggle ('blue-bg');
});

var appleButton = document.getElementById ('apple-btn'); 
appleButton.addEventListener("click", function () {
    var newApple = document.createElement("div");
    newApple.classList.add("apple");
    newApple.style.filter = 'drop-shadow(0 0 8px ' + randomColor() + ')';

    var appleBox = document.querySelector('.apples')
    appleBox.appendChild(newApple);

    newApple.scrollIntoView({ block: 'start', behavior: 'smooth' });
});



var removeAppleButton = document.getElementById ('remove-apple-btn'); 
removeAppleButton.addEventListener("click", function () {
    var apples = document.querySelectorAll(".apple")
    if (apples.length > 0) {
        var firstApple = apples[0];
        firstApple.remove(); 
    }
});

function randomNumber() {
    return Math.floor (Math.random() * 256);
}

function randomColor() {
    var r = randomNumber(); 
    var g = randomNumber(); 
    var b = randomNumber(); 
    return "rgb(" + r + "," + g + "," + b + ")"; 

}

