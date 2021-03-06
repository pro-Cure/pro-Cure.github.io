var menu = document.getElementById("menu");
var menuToggle = false;

// Dropdown event

document.getElementById('hamburger').addEventListener('click', openMenu);

function openMenu(){
    if(menuToggle == false){
        menu.style.display = "inline-block";
        menuToggle = true;
        // Timeout required so menu doesn't immediately close from the same click
        setTimeout(function(){
            document.querySelector('body').addEventListener('click', closeMenu);
            document.getElementById('hamburger').removeEventListener('click', openMenu);
        },200);
    }
}

function closeMenu(){
    if(menuToggle == true){
        menu.style.display = "none";
        menuToggle = false;
        document.querySelector('body').removeEventListener('click', closeMenu);
        document.getElementById('hamburger').addEventListener('click', openMenu);
    }
}

// Old dropwdown event
// document.querySelector('body').addEventListener('click', clickEvent);

// function clickEvent(targ) {
//     // console.log(targ.srcElement.parentElement.id);
//     if(targ.srcElement.parentElement == null || targ.srcElement.parentElement.id != 'hamburger' || menuToggle == true) {
//         menu.style.display = "none";
//         menuToggle = false;
//         return;
//     }
//     else {
//         menu.style.display = "inline-block";
//         menuToggle = true;
//         return;
//     }
// }


// Function runs on resize
function getWindowWidth() {
    let windowWidth = window.innerWidth;
    setTimeout(function(){
        if (windowWidth >= 800 && menuToggle == true) {
            menu.style.display = 'none';
            menuToggle == false;
        }
    }, 100);
}

window.addEventListener('resize', getWindowWidth);

// About link

let aboutArr = document.getElementsByClassName("about");
[...aboutArr].forEach(element => {
element.addEventListener('click',showAbout);
});

let aboutToggle = false;

function showAbout() {
    if(aboutToggle == false) {
        // Scroll to about panel
        window.scroll({
            top: document.getElementById('info').getBoundingClientRect().top,
            behavior: 'smooth'
        });
        document.getElementById('info').innerHTML = `<h3 id="newAbout">About</h3>
        <span>
        <p>Our team is world renowned and trusted by millions. We're committed to doing everything we can to alleviate your burdens when it comes to the penny pinching insurance industry!
        </p>
        <p>This app doesn't store your data, all calculations are done by your browser!</p>
        </span>
        <a id="mode" onclick="darkMode()">Toggle Dark Mode</a>`
        aboutToggle = true;
    }
    else {
        document.getElementById('info').innerHTML = `<img src="img/teddydoctor.jpg" id="newAbout" class="about">
        <a id="mode" onclick="darkMode()">Toggle Dark Mode</a>`
        aboutToggle = false;
    }
    // After toggle, re-add event listener to the clickable element
    document.getElementById('newAbout').addEventListener('click',showAbout);
}

// Dark Mode vars

var root = document.querySelector(':root');
var modeToggle = false;

var light1 = '#6495ED';
var light2 = '#93CCEA';
var light290 = '#93CCEA90';
var dark1 = '#051c32';
var dark2 = '#04182a';
var dark290 = '#04182a90';
var lightshadow = 'rgba(220, 226, 129, 0.5)';
var darkshadow = '';

function darkMode() {
    if(modeToggle == false) {
        root.style.setProperty('--foreground1', '#5E0B73');
        root.style.setProperty('--foreground2', '#31043D');
        root.style.setProperty('--foreground290', '#31043D90');
        root.style.setProperty('--background1', '#DCF0DE');
        root.style.setProperty('--background2', '#D1F2CC');
        root.style.setProperty('--background290', '#D1F2CC90');
        root.style.setProperty('--shadow1', '#B787C280');
        modeToggle = true;
        return;
    }
    else {
        root.style.setProperty('--foreground1', light1);
        root.style.setProperty('--foreground2', light2);
        root.style.setProperty('--foreground290', light290);
        root.style.setProperty('--background1', dark1);
        root.style.setProperty('--background2', dark2);
        root.style.setProperty('--background290', dark290);
        root.style.setProperty('--shadow1', lightshadow);
        modeToggle = false;
        return;
    }
}