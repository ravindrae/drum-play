var buttons = document.querySelectorAll("button");

function playSound(type) {
    switch (type) {
        case 'w':
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            break;
    }
}

for (let i = 0; i < buttons.length; i++) {
    const element = buttons[i];
    console.log(element);
    element.addEventListener("click", function() {
        var type = this.innerHTML;

        playSound(type);
        animateButton(type);
    });
}

document.addEventListener("keydown", function(event) {
    playSound(event.key);
    animateButton(event.key);
});

function animateButton(key) {
    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);
}
