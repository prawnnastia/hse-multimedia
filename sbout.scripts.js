var button = document.getElementById ('red-btn'); 
console.log(button)
button.addEventListener("click", function () {
    var body = document.querySelector('body')
    body.style.background = 'red';
});