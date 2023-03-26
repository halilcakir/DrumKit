document.addEventListener("keydown", function (event) { // event burada bu fonksiyonu neyin tetiklediğini bildirir bu anonymos funct
// adı herhangi bir şey olabilir örneğin e'de olabilir.
// burada dikkat edilmesi gereken bu eventlistener otomatik olarak function içine event input eder 
// eğer function(e) gibi bir input fonsksiyon içine verilirse.
    console.log(event);

    animation(event['key']);
    sing(event['key']);

});

for (var i = 0; document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () { // <-- Bu fonksiona anonymos function denir
            //  this methodu basılan butonun kimliğini taşır
            var innerHtml = this.innerHTML;
            animation(innerHtml);
            sing(innerHtml);

        }

    );
}


function sing(trigger) {

    switch (trigger) {
        case "w":

            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":

            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":

            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":

            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":

            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":

            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":

            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
    }
}
function animation(e){
   var activeButton = document.querySelector("."+ e);
   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);

}
// not this ile event arasındaki farka dikkat !

// bir fonkisyon başka bir fonksiyon içine input olarak giriyorsa ona callback function denir.