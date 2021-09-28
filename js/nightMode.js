

// TODO: Also set up darkMode in darkMode.js
// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/


function nightMode() {
    // TODO: add formatting toggle for all elements
    var body = document.body;
    body.classList.toggle("bodyNight");


    if(document.getElementById("homeIcon")){
        var homeIcon = document.getElementById("homeIcon");
    
        if(homeIcon.classList.contains('homeIcon')){
            homeIcon.classList.remove("homeIcon");
            homeIcon.classList.add("homeIconNight");
        }
        else if (homeIcon.classList.contains('homeIconNight')){
            homeIcon.classList.remove("homeIconNight");
            homeIcon.classList.add("homeIcon");
        }
    }
    else if(document.getElementById("homeIconActive")){
        var homeIconActive = document.getElementById("homeIconActive");
        if(homeIconActive.classList.contains('homeIconActive')){
            homeIconActive.classList.remove("homeIconActive");
            homeIconActive.classList.add("homeIconNightActive");
        }
        else if (homeIconActive.classList.contains('homeIconNightActive')){
            homeIconActive.classList.remove("homeIconNightActive");
            homeIconActive.classList.add("homeIconActive");
        }
    }

    if(document.getElementById("vinylIcon")){
        var vinylIcon = document.getElementById("vinylIcon");
        if (vinylIcon.classList.contains('vinylIcon'))
        {
            vinylIcon.classList.remove('vinylIcon');
            vinylIcon.classList.add('vinylIconNight');
        }
        else if (vinylIcon.classList.contains('vinylIconNight')) {
            vinylIcon.classList.remove('vinylIconNight');
            vinylIcon.classList.add('vinylIcon');
        }
    }

    if(document.getElementById("instaIcon")){
        var icon = document.getElementById("instaIcon");
        if (icon.classList.contains('icon')){
            icon.classList.remove('icon');
            icon.classList.add('iconNight');
        }
        else if (icon.classList.contains('iconNight')){
            icon.classList.remove('iconNight');
            icon.classList.add('icon');
        }
    }

    if(document.getElementById("twitchIcon")){
        var icon = document.getElementById("twitchIcon");
        if (icon.classList.contains('icon')){
            icon.classList.remove('icon');
            icon.classList.add('iconNight');
        }
        else if (icon.classList.contains('iconNight')){
            icon.classList.remove('iconNight');
            icon.classList.add('icon');
        }
    }

    if(document.getElementById("ytIcon")){
        var icon = document.getElementById("ytIcon");
        if (icon.classList.contains('icon')){
            icon.classList.remove('icon');
            icon.classList.add('iconNight');
        }
        else if (icon.classList.contains('iconNight')){
            icon.classList.remove('iconNight');
            icon.classList.add('icon');
        }
    }

    if (document.querySelectorAll('.navLink')){
        var navLink = document.querySelectorAll('.navLink');
        navLink.forEach(element => {
            element.classList.toggle('navLinkNight')
        });
    }
    
    if (document.querySelectorAll('.navLinkDayActive')){
        var navLinkActive = document.querySelectorAll('.navLinkDayActive');
        navLinkActive.forEach( element =>{
            element.classList.toggle('navLinkNightActive')
        });
    }


    if (document.querySelectorAll('h1')){
        var h1 = document.querySelectorAll('h1');
        h1.forEach(element => {
            element.classList.toggle('h1Night')
        });
    }
    
    if (document.querySelectorAll('h2')){
        var h2 = document.querySelectorAll('h2');
        h2.forEach(element => {
            element.classList.toggle('h2Night')
        });
    }

    if (document.querySelectorAll('h3')){
        var h3 = document.querySelectorAll('h3');
        h3.forEach(element => {
            element.classList.toggle('h3Night')
        });
    }
    
    if (document.querySelectorAll('label')){
        var label = document.querySelectorAll('label');
        label.forEach(element => {
            element.classList.toggle('labelNight')
        });
    }

    if (document.querySelectorAll('.h3Bold')){
        var h3Bold = document.querySelectorAll('.h3Bold');
        h3Bold.forEach(element => {
            element.classList.toggle('h3BoldNight')
        });
    }

    if (document.querySelectorAll('a')){
        var a = document.querySelectorAll('a');
        a.forEach(element => {
            element.classList.toggle('aNight');
        });
    }
    
    if (document.querySelectorAll('p')){
        var p = document.querySelectorAll('p');
        p.forEach(element => {
        element.classList.toggle('pNight') 
        });
    }

    if (document.querySelectorAll('.pOffColour')){
        var pOffColour = document.querySelectorAll('.pOffColour');
        pOffColour.forEach(element => {
            element.classList.toggle('pOffColourNight')
        });
    }

    if (document.querySelectorAll('.footerLink')){
        var footerLink = document.querySelectorAll('.footerLink');
        footerLink.forEach(element => {
            element.classList.toggle('footerLinkNight')
        });
    }
    

    // TODO: Replace DOM elements
    // https://www.javascripttutorial.net/dom/manipulating/replace-a-dom-element/

    lunarCalendar();

}



function lunarCalendar (){
    const logo = document.getElementById("logo");

    // TODO: Generate file name by lunar phase
    if (logo.getAttribute("src") == "../assets/images/logo/sun.png"){
        logo.src = "../assets/images/logo/0newMoon1.png";
    }
    else if (logo.getAttribute("src") == "../assets/images/logo/0newMoon1.png"){
        logo.src = "../assets/images/logo/sun.png";
    }
    
    
}