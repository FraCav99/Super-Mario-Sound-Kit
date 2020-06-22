var numberOfButtons = document.querySelectorAll(".sound").length;


// Detecting mouse press

for (var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".sound")[i].addEventListener('click', function(){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}


// Detecting keyboard press

document.addEventListener('keydown', function(event){

    makeSound(event.key);

    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "m":
            var audio = new Audio("sounds/super-mario-64-yahoo-sound.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/luige.mp3");
            audio.play();
            break;

        case "t":
            var audio = new Audio("sounds/toad.mp3");
            audio.play();
            break;

        case "w":
            var audio = new Audio("sounds/mk64_wario03.mp3");
            audio.play();
            break;

        case "p":
            var audio = new Audio("sounds/peach.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("sounds/showtime_1.mp3");
            audio.play();
            break;

        case "y":
            var audio = new Audio("sounds/yoshi_1.mp3");
            audio.play();
            break;

        default:
            break;
    }
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    // Add the class to the current activate button
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 500);
}