
// changing the showcase 4 background every second
const showcase4 = document.getElementsByClassName('showcase-4')[0];
var toggleCount = 0; //toggle variable

// function to change the background of showcase 4
function changeBackgroundShowcase4() {

    if (toggleCount%2 == 0) {

        showcase4.style.backgroundImage = "url('./assets/img/S4.jpg')";
    } else {

        showcase4.style.backgroundImage = "url('./assets/img/S5.jpg')";
    }

    toggleCount++;

    setTimeout(changeBackgroundShowcase4, 2000);
}

changeBackgroundShowcase4();