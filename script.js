/** 
var slideContactus = 1;
showSlides(slideContactus);

function pluslides(n) {
    showSlides(slideContactus += n)
}

function currentSlide(n){
    showSlides(slideContactus = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {slideContactus = 1 }
    if (n < 1) { slideContactus = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = o; i < dots.length; i++) {
        dots[i].className =dots[1].className.replace("active",""); 
        }
        slides[slideContactus- 1].style.display = "block";
        dots[slideContactus - 1].className +="active";
    
}