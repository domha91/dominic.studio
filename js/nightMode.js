// TODO: Use cookies to trigger nightMode function to toggle it for
// the duration of the session on all pages

// TODO: Just change the colors with element.style.color instead of using 
// all the elementNight classes

// TODO: Also set up darkMode in darkMode.js
// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/


function nightMode() {

    // TODO: Replace DOM elements
    // https://www.javascripttutorial.net/dom/manipulating/replace-a-dom-element/
    // https://attacomsian.com/blog/javascript-create-dom-element
    // https://attacomsian.com/blog/javascript-remove-dom-element

    lunarCalendar();

    const nav = document.querySelector('nav');
    const pricingLink = document.querySelector('#pricingLink');
    const contactLink = document.querySelector('#contactLink');

    if (!document.getElementById('softwareLink')) {
        const softwareLink = document.createElement('a');
        softwareLink.setAttribute('href', 'software.html');
        softwareLink.setAttribute('class', 'navLink');
        softwareLink.setAttribute('id', 'softwareLink');
        softwareLink.innerHTML = '<a>Software</a>';
        pricingLink.style.display = 'none';
        nav.insertBefore(softwareLink, contactLink);
    } else {
        softwareLink.remove();
        pricingLink.style.display = 'inline-flex';
    }

    const heroVid = document.querySelector('#heroVid')
    const twitchEmbed = document.querySelector('#twitchEmbed');

    if (heroVid.style.display != 'none') {
        heroVid.style.display = 'none';
        twitchEmbed.style.display = 'block';
    }
    else if (twitchEmbed.style.display != 'none') {
        twitchEmbed.style.display = 'none';
        heroVid.style.display = 'block';
    }

    const subHeroCopyDay = document.querySelector('#subHeroCopyDay')
    const subHeroCopyNight = document.querySelector('#subHeroCopyNight');

    if (subHeroCopyDay.style.display != 'none') {
        subHeroCopyDay.style.display = 'none';
        subHeroCopyNight.style.display = 'block';
    }
    else if (subHeroCopyNight.style.display != 'none') {
        subHeroCopyNight.style.display = 'none';
        subHeroCopyDay.style.display = 'block';
    }

    const subHeroVidDay = document.querySelector('#subHeroVidDay');
    const subHeroVidNight = document.querySelector('#subHeroVidNight');

    if (subHeroVidDay.style.display != 'none') {
        subHeroVidDay.style.display = 'none';
        subHeroVidNight.style.display = 'block';
    }
    else if (subHeroVidNight.style.display != 'none') {
        subHeroVidNight.style.display = 'none';
        subHeroVidDay.style.display = 'block';
    }

    // const instaIcon = document.querySelector('#instaIcon');
    const twitchIcon = document.querySelector('#twitchIcon');
    const ytIcon = document.querySelector('#ytIcon');

    // const dominicStudioInsta = "window.open('https://www.instagram.com/studio_dominic/')";
    const dominicStudioTwitch = "window.open('https://www.twitch.tv/dominicstudio')"
    const dominicStudioYT = "window.open('https://www.youtube.com/channel/UCpfvvzBoJFaWQH9fsovsJog')"

    // TODO: Set up mmmstream Instagram again
    // const mmmStreamInsta = "window.open('')";
    const mmmStreamTwitch = "window.open('https://www.twitch.tv/moonlitmicrotonalmusic')";
    const mmmStreamYT = "window.open('https://www.youtube.com/channel/UChwYpYduyCgPbSJxDeapc8g')";

    // TODO: Toggle Instagram links for instaIcon
    // if(instaIcon.getAttribute('onclick') == dominicStudioInsta){
    //     instaIcon.setAttribute('onclick',mmmStreamInsta);
    // }
    // else if(instaIcon.getAttribute('onclick') == mmmStreamInsta){
    //     instaIcon.setAttribute('onclick',dominicStudioInsta) ;
    // }


    if (twitchIcon.getAttribute('onclick') == dominicStudioTwitch) {
        twitchIcon.setAttribute('onclick', mmmStreamTwitch);
    }
    else if (twitchIcon.getAttribute('onclick') == mmmStreamTwitch) {
        twitchIcon.setAttribute('onclick', dominicStudioTwitch);
    }

    if (ytIcon.getAttribute('onclick') == dominicStudioYT) {
        ytIcon.setAttribute('onclick', mmmStreamYT);
    }
    else if (ytIcon.getAttribute('onclick') == mmmStreamYT) {
        ytIcon.setAttribute('onclick', dominicStudioYT);
    }

    // TODO: add formatting toggle for all elements
    var body = document.body;
    body.classList.toggle("bodyNight");
    nav.classList.toggle("navNight");



    if (document.getElementById("homeIcon")) {
        var homeIcon = document.getElementById("homeIcon");

        if (homeIcon.classList.contains('homeIcon')) {
            homeIcon.classList.remove("homeIcon");
            homeIcon.classList.add("homeIconNight");
        }
        else if (homeIcon.classList.contains('homeIconNight')) {
            homeIcon.classList.remove("homeIconNight");
            homeIcon.classList.add("homeIcon");
        }
    }
    else if (document.getElementById("homeIconActive")) {
        var homeIconActive = document.getElementById("homeIconActive");
        if (homeIconActive.classList.contains('homeIconActive')) {
            homeIconActive.classList.remove("homeIconActive");
            homeIconActive.classList.add("homeIconNightActive");
        }
        else if (homeIconActive.classList.contains('homeIconNightActive')) {
            homeIconActive.classList.remove("homeIconNightActive");
            homeIconActive.classList.add("homeIconActive");
        }
    }

    if (document.getElementById("vinylIcon")) {
        var vinylIcon = document.getElementById("vinylIcon");
        if (vinylIcon.classList.contains('vinylIcon')) {
            vinylIcon.classList.remove('vinylIcon');
            vinylIcon.classList.add('vinylIconNight');
        }
        else if (vinylIcon.classList.contains('vinylIconNight')) {
            vinylIcon.classList.remove('vinylIconNight');
            vinylIcon.classList.add('vinylIcon');
        }
    }

    if (document.getElementById("instaIcon")) {
        var icon = document.getElementById("instaIcon");
        if (icon.classList.contains('icon')) {
            icon.classList.remove('icon');
            icon.classList.add('iconNight');
        }
        else if (icon.classList.contains('iconNight')) {
            icon.classList.remove('iconNight');
            icon.classList.add('icon');
        }
    }

    if (document.getElementById("twitchIcon")) {
        var icon = document.getElementById("twitchIcon");
        if (icon.classList.contains('icon')) {
            icon.classList.remove('icon');
            icon.classList.add('iconNight');
        }
        else if (icon.classList.contains('iconNight')) {
            icon.classList.remove('iconNight');
            icon.classList.add('icon');
        }
    }

    if (document.getElementById("ytIcon")) {
        var icon = document.getElementById("ytIcon");
        if (icon.classList.contains('icon')) {
            icon.classList.remove('icon');
            icon.classList.add('iconNight');
        }
        else if (icon.classList.contains('iconNight')) {
            icon.classList.remove('iconNight');
            icon.classList.add('icon');
        }
    }

    if (document.querySelectorAll('.navLink')) {
        var navLink = document.querySelectorAll('.navLink');
        navLink.forEach(element => {
            element.classList.toggle('navLinkNight');
        });
    }


    if (document.querySelectorAll('.navLinkDayActive')) {
        var navLinkActive = document.querySelectorAll('.navLinkDayActive');
        navLinkActive.forEach(element => {
            element.classList.toggle('navLinkNightActive');
        });
    }


    if (document.querySelectorAll('h1')) {
        var h1 = document.querySelectorAll('h1');
        h1.forEach(element => {
            element.classList.toggle('h1Night');
        });
    }

    if (document.querySelectorAll('h2')) {
        var h2 = document.querySelectorAll('h2');
        h2.forEach(element => {
            element.classList.toggle('h2Night')
        });
    }

    if (document.querySelectorAll('h3')) {
        var h3 = document.querySelectorAll('h3');
        h3.forEach(element => {
            element.classList.toggle('h3Night')
        });
    }

    if (document.querySelectorAll('label')) {
        var label = document.querySelectorAll('label');
        label.forEach(element => {
            element.classList.toggle('labelNight')
        });
    }

    if (document.querySelectorAll('.h3Bold')) {
        var h3Bold = document.querySelectorAll('.h3Bold');
        h3Bold.forEach(element => {
            element.classList.toggle('h3BoldNight')
        });
    }

    if (document.querySelectorAll('a')) {
        var a = document.querySelectorAll('a');
        a.forEach(element => {
            element.classList.toggle('aNight');
        });
    }

    if (document.querySelectorAll('p')) {
        var p = document.querySelectorAll('p');
        p.forEach(element => {
            element.classList.toggle('pNight')
        });
    }

    if (document.querySelectorAll('.pOffColour')) {
        var pOffColour = document.querySelectorAll('.pOffColour');
        pOffColour.forEach(element => {
            element.classList.toggle('pOffColourNight')
        });
    }

    if (document.querySelectorAll('.footerLink')) {
        var footerLink = document.querySelectorAll('.footerLink');
        footerLink.forEach(element => {
            element.classList.toggle('footerLinkNight')
        });
    }

}



function lunarCalendar() {
    const logo = document.getElementById("logo");
    // Generate logo file name  generateLunarFn function
    var lunarFn = generateLunarFn();


    if (logo.getAttribute("src") == "../assets/images/logo/sun.png") {
        logo.src = lunarFn;
    }
    else if (logo.getAttribute("src") == lunarFn) {
        logo.src = "../assets/images/logo/sun.png";
    }


}

function generateLunarFn() {
    var filename = PicFnDict[findDate()][0];
    return filename;
    // TODO: Scrape lunar data instead of manually

}

function findDate() {
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; //Months are zero based
    var curr_year = d.getFullYear();
    var date = curr_date + "" + curr_month + "" + curr_year;
    //  //Return a different value if it is a duplicate 
    switch (date) {
        case (1112021):
            if (curr_month == 11) {
                date = 11120212;
                break;
            }
            else {
                date = 1112021;
            }
            break;
        case (2112021):
            if (curr_month == 11) {
                date = 21120212;
                break;
            }
            else {
                date = 2112021;
            }
            break;
        case (3112021):
            if (curr_month == 11) {
                date = 31120212;
                break;
            }
            else {
                date = 3112021;
            }
            break;
        case (1122021):
            if (curr_month == 12) {
                date = 11220212;
                break;
            }
            else {
                date = 1122021;
            }
            break;
        case (2122021):
            if (curr_month == 12) {
                date = 21220212;
                break;
            }
            else {
                date = 2122021;
            }
            break;
        default: break;
    }
    return date;

}

var PicFnDict =
{

    2992021: ["../assets/images/logo/23waningGibbous5.png"],
    3092021: ["../assets/images/logo/24thirdQuarter1.png"],
    1102021: ["../assets/images/logo/25thirdQuarter2.png"],
    2102021: ["../assets/images/logo/26thirdQuarter3.png"],
    3102021: ["../assets/images/logo/27waningCrescent1.png"],
    4102021: ["../assets/images/logo/28waningCrescent2.png"],
    5102021: ["../assets/images/logo/29waningCrescent3.png"],
    6102021: ["../assets/images/logo/0newMoon1.png"],
    7102021: ["../assets/images/logo/1newMoon2.png"],
    8102021: ["../assets/images/logo/2newMoon3.png"],
    9102021: ["../assets/images/logo/3newMoon4.png"],
    10102021: ["../assets/images/logo/4newMoon5.png"],
    11102021: ["../assets/images/logo/5waxingCrescent1.png"],
    12102021: ["../assets/images/logo/6waxingCrescent2.png"],
    13102021: ["../assets/images/logo/7firstQuarter1.png"],
    14102021: ["../assets/images/logo/8firstQuarter2.png"],
    15102021: ["../assets/images/logo/9firstQuarter3.png"],
    16102021: ["../assets/images/logo/10firstQuarter4.png"],
    17102021: ["../assets/images/logo/11waxingGibbous1.png"],
    18102021: ["../assets/images/logo/12waxingGibbous2.png"],
    19102021: ["../assets/images/logo/13waxingGibbous3.png"],
    20102021: ["../assets/images/logo/14fullMoon1.png"],
    21102021: ["../assets/images/logo/15fullMoon2.png"],
    22102021: ["../assets/images/logo/16fullMoon3.png"],
    23102021: ["../assets/images/logo/17fullMoon4.png"],
    24102021: ["../assets/images/logo/18fullMoon5.png"],
    25102021: ["../assets/images/logo/19waningGibbous1.png"],
    26102021: ["../assets/images/logo/20waningGibbous2.png"],
    27102021: ["../assets/images/logo/21waningGibbous3.png"],
    28102021: ["../assets/images/logo/22waningGibbous4.png"],
    29102021: ["../assets/images/logo/23waningGibbous5.png"],
    30102021: ["../assets/images/logo/24thirdQuarter1.png"],
    31102021: ["../assets/images/logo/25thirdQuarter2.png"],
    11120212: ["../assets/images/logo/26thirdQuarter3.png"],
    21120212: ["../assets/images/logo/27waningCrescent1.png"],
    31120212: ["../assets/images/logo/28waningCrescent2.png"],
    4112021: ["../assets/images/logo/29waningCrescent3.png"],
    5112021: ["../assets/images/logo/0newMoon1.png"],
    6112021: ["../assets/images/logo/2newMoon3.png"],
    7112021: ["../assets/images/logo/3newMoon4.png"],
    8112021: ["../assets/images/logo/4newMoon5.png"],
    9112021: ["../assets/images/logo/5waxingCrescent1.png"],
    10112021: ["../assets/images/logo/6waxingCrescent2.png"],
    11112021: ["../assets/images/logo/7firstQuarter1.png"],
    12112021: ["../assets/images/logo/8firstQuarter2.png"],
    13112021: ["../assets/images/logo/9firstQuarter3.png"],
    14112021: ["../assets/images/logo/10firstQuarter4.png"],
    15112021: ["../assets/images/logo/11waxingGibbous1.png"],
    16112021: ["../assets/images/logo/12waxingGibbous2.png"],
    17112021: ["../assets/images/logo/13waxingGibbous3.png"],
    18112021: ["../assets/images/logo/14fullMoon1.png"],
    19112021: ["../assets/images/logo/15fullMoon2.png"],
    20112021: ["../assets/images/logo/16fullMoon3.png"],
    21112021: ["../assets/images/logo/17fullMoon4.png"],
    22112021: ["../assets/images/logo/18fullMoon5.png"],
    23112021: ["../assets/images/logo/19waningGibbous1.png"],
    24112021: ["../assets/images/logo/20waningGibbous2.png"],
    25112021: ["../assets/images/logo/21waningGibbous3.png"],
    26112021: ["../assets/images/logo/22waningGibbous4.png"],
    27112021: ["../assets/images/logo/23waningGibbous5.png"],
    28112021: ["../assets/images/logo/24thirdQuarter1.png"],
    29112021: ["../assets/images/logo/25thirdQuarter2.png"],
    30112021: ["../assets/images/logo/26thirdQuarter3.png"],
    11220212: ["../assets/images/logo/27waningCrescent1.png"],
    21220212: ["../assets/images/logo/28waningCrescent2.png"],
    3122021: ["../assets/images/logo/29waningCrescent3.png"],
    4122021: ["../assets/images/logo/0newMoon1.png"],
    5122021: ["../assets/images/logo/2newMoon3.png"],
    6122021: ["../assets/images/logo/3newMoon4.png"],
    7122021: ["../assets/images/logo/4newMoon5.png"],
    8122021: ["../assets/images/logo/5waxingCrescent1.png"],
    9122021: ["../assets/images/logo/6waxingCrescent2.png"],
    10122021: ["../assets/images/logo/7firstQuarter1.png"],
    11122021: ["../assets/images/logo/8firstQuarter2.png"],
    12122021: ["../assets/images/logo/9firstQuarter3.png"],
    13122021: ["../assets/images/logo/10firstQuarter4.png"],
    14122021: ["../assets/images/logo/11waxingGibbous1.png"],
    15122021: ["../assets/images/logo/12waxingGibbous2.png"],
    16122021: ["../assets/images/logo/13waxingGibbous3.png"],
    17122021: ["../assets/images/logo/14fullMoon1.png"],
    18122021: ["../assets/images/logo/15fullMoon2.png"],
    19122021: ["../assets/images/logo/16fullMoon3.png"],
    20122021: ["../assets/images/logo/17fullMoon4.png"],
    21122021: ["../assets/images/logo/18fullMoon5.png"],
    22122021: ["../assets/images/logo/19waningGibbous1.png"],
    23122021: ["../assets/images/logo/20waningGibbous2.png"],
    24122021: ["../assets/images/logo/21waningGibbous3.png"],
    25122021: ["../assets/images/logo/22waningGibbous4.png"],
    26122021: ["../assets/images/logo/23waningGibbous5.png"],
    27122021: ["../assets/images/logo/24thirdQuarter1.png"],
    28122021: ["../assets/images/logo/25thirdQuarter2.png"],
    29122021: ["../assets/images/logo/26thirdQuarter3.png"],
    30122021: ["../assets/images/logo/27waningCrescent1.png"],
    31122021: ["../assets/images/logo/28waningCrescent2.png"],
};

