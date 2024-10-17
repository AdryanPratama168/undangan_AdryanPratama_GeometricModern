document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your RSVP!');
    popup.style.display = "none";
    navbar.style.display = "flex";
});

document.querySelector('#open-invitation').addEventListener('click', function() {
    const mainCover = document.querySelector('.maincover');
    const sections = document.getElementById('sections');
    const ornamenCover1 = document.querySelector('.ornamen-cover-1');
    const ornamenCover2 = document.querySelector('.ornamen-cover-2');
    const ornamenCover3 = document.querySelector('.ornamen-cover-3');
    const ornamenCover4 = document.querySelector('.ornamen-cover-4');    
    const body = document.body;

    mainCover.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
    ornamenCover1.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
    ornamenCover2.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
    ornamenCover3.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';
    ornamenCover4.style.transition = 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out';

    mainCover.style.transform = 'translateY(-100vh)';
    ornamenCover1.style.transform = 'translateY(-100vh)';
    ornamenCover2.style.transform = 'translateY(-100vh)';
    ornamenCover3.style.transform = 'translateY(-100vh)';
    ornamenCover4.style.transform = 'translateY(-100vh)';
    
    mainCover.style.opacity = '0';
    ornamenCover1.style.opacity = '0';
    ornamenCover2.style.opacity = '0';
    ornamenCover3.style.opacity = '0';
    ornamenCover4.style.opacity = '0';
  

    body.style.overflow = 'hidden';

    setTimeout(() => {
        mainCover.style.display = 'none';
        ornamenCover1.style.display = 'none';
        ornamenCover2.style.display = 'none';
        ornamenCover3.style.display = 'none';
        ornamenCover4.style.display = 'none';
        sections.removeAttribute('hidden');
        navbar.style.display = 'flex';

        body.style.overflow = 'auto';
    }, 800);
});

var popup = document.getElementById("popupForm");
var btn = document.getElementById("openPopup");
var span = document.getElementsByClassName("close")[0];
var navbar = document.getElementById('nav');

btn.onclick = function() {
    popup.style.display = "block";
    navbar.style.display = "none";
}
span.onclick = function() {
    popup.style.display = "none";
    navbar.style.display = "flex";
}
window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
        navbar.style.display = "flex";
    }
}

function copyText(elementId) {
    const textElement = document.getElementById(elementId);
    const tempInput = document.createElement('input');
    tempInput.value = textElement.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');    
    document.body.removeChild(tempInput);
    alert('Teks telah disalin ke clipboard!');
}
const music = document.getElementById('music');
const imgSpeaker = document.getElementById('imgSpeaker');
const playMusicBtn = document.querySelector('.playMusicBtn');

playMusicBtn.addEventListener('click', function() {
    music.play().then(() => {
        playMusicBtn.style.display = 'none';
        imgSpeaker.style.display = 'block';
        imgSpeaker.classList.add('rotate');
    })
});

function toggleMusic() {
    if (music.paused) {
        music.play();
        imgSpeaker.src = "assets/img/off.png";
    } else {
        music.pause();
        imgSpeaker.src = "assets/img/on.png";
    }
}