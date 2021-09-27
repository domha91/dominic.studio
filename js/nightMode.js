

// TODO: Also set up darkMode in darkMode.js
// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/


function nightMode() {
    // TODO: add formatting toggle for all elements
    var body = document.body;
    body.classList.toggle("bodyNight");


    // var homeIcon = document.querySelector('.homeIcon');
    // homeIcon.classList.toggle("homeIconNight")

    // var homeIconActive = document.querySelectorAll('.homeIconActive');
    // homeIconActive.classList.toggle("homeIconNightActive");
    // homeIconActive.forEach( element => {
    //     element.classList.toggle('homeIconNightActive');
    // });

    var navLink = document.querySelectorAll('.navLink');
    navLink.forEach(element => {
        element.classList.toggle('navLinkNight')
    });
    
    var navLinkActive = document.querySelectorAll('.navLinkDayActive');
    navLinkActive.forEach( element =>{
        element.classList.toggle('navLinkNightActive')
    });

    var h1 = document.querySelectorAll('h1');
    h1.forEach(element => {
        element.classList.toggle('h1Night')
    });

    var h2 = document.querySelectorAll('h2');
    h2.forEach(element => {
        element.classList.toggle('h2Night')
    });

    var h3 = document.querySelectorAll('h3');
    h3.forEach(element => {
        element.classList.toggle('h3Night')
    });

    var label = document.querySelectorAll('label');
    label.forEach(element => {
        element.classList.toggle('labelNight')
    });

    var h3Bold = document.querySelectorAll('.h3Bold');
    h3Bold.forEach(element => {
        element.classList.toggle('h3BoldNight')
    });

    var p = document.querySelectorAll('p');
    p.array.forEach(element => {
       element.classList.toggle('pNight') 
    });

    var pOffColour = document.querySelectorAll('.pOffColour');
    pOffColour.forEach(element => {
        element.classList.toggle('pOffColourNight')
    });

    var footerLink = document.querySelectorAll('.footerLink');
    footerLink.forEach(element => {
        element.classList.toggle('footerLinkNight')
    });

    // TODO: Replace DOM elements
    // https://www.javascripttutorial.net/dom/manipulating/replace-a-dom-element/
}

// TODO: Add lunarCalendar function for the logoNight 