var button = document.getElementById ('red-btn'); 
button.addEventListener("click", function () {
    var body = document.querySelector('body')
    body.style.background = 'red';
});

var appleButton = document.getElementById ('apple-btn'); 
appleButton.addEventListener("click", function () {
    var newApple = document.createElement("div");
    newApple.classList.add("apple");

    var apples = document.querySelector('.apples')
    apples.appendChild(newApple);
});