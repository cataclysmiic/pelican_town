// GETS HOUR OF DAY
let hour = new Date().getHours();


// CHANGE TO SIMULATE DIFFERENT TIMES OF DAY
// 0-3 night
// 4-6 dawn
// 7-10 morNning
// 11-17 day
// 18-19 sunset
// 20-23 night

// hour = 11;


// DETERMINES BG IMAGE
const style = document.createElement('style');
if (0 <= hour && hour <= 3) {
    style.innerHTML = `body {background-image: url("img/sdv_night.png");}`;
} else if (4 <= hour && hour <= 6)  {
    style.innerHTML = `body {background-image: url("img/sdv_dawn.png");}`;
} else if (7 <= hour && hour <= 10)  {
    style.innerHTML = `body {background-image: url("img/sdv_morning.png");}`;
} else if (11 <= hour && hour <= 17)  {
    style.innerHTML = `body {background-image: url("img/sdv_day.png");}`;
} else if (18 <= hour && hour <= 19)  {
    style.innerHTML = `body {background-image: url("img/sdv_sunset.png");}`;
} else {
    style.innerHTML = `body {background-image: url("img/sdv_night.png");}`;
}


// INSERTS BODY BG STYLE
const stylesheetLink = document.querySelector('link');
stylesheetLink.parentNode.insertBefore(style, stylesheetLink.nextSibling);



// EXPANDING MENU
function menuOpenClose() {
    const topNav = document.getElementById("top-nav");
    const arrow = document.getElementById("arrow");
    if (topNav.style.display === "none") {
        topNav.style.display = "block";
        arrow.src = "img/nav_arrow_up.svg";
    } else {
        topNav.style.display = "none";
        arrow.src = "img/nav_arrow_down.svg";
    }
  }


// LETTER FROM THE MAYOR MODAL
const modal = document.getElementById("modal");
const letter = document.getElementById("letter");
const close = document.getElementById("close");


letter.onclick = () => modal.style.display = "block";

close.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}