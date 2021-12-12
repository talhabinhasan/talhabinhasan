const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const firstSection = document.querySelector("section:first-of-type")

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    firstSection.classList.toggle('marginTop');
})

window.addEventListener('scroll', function(){ 

    if(window.scrollY > 100){
        firstSection.classList.add("scrolled");
    }
    else {
        firstSection.classList.remove("scrolled");
    }

});