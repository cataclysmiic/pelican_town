// GETS HOUR OF DAY
const hour = new Date().getHours();


// DISPLAYS BG IMAGE VALUE
// const body = document.querySelector('body');
// const background = window.getComputedStyle(body);
// console.log( background.getPropertyValue('background-image') );


// DETERMINES DAY OR NIGHT BG
const style = document.createElement('style');
if (hour >= 19 || hour <= 7) {
    style.innerHTML = `body {background-image: url("img/sdv_night.png");}`;
} else {
    style.innerHTML = `body {background-image: url("img/sdv_day.png");}`;
}


// INSERTS BODY BG STYLE
const stylesheetLink = document.querySelector('link');
stylesheetLink.parentNode.insertBefore(style, stylesheetLink.nextSibling);