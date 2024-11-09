function toggleMusic() {
    const music = document.getElementById("background-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}


let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let descriptions = document.getElementsByClassName("description");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        descriptions[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    descriptions[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000);
}
showSlides();