const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const nav = document.querySelector('#nav');
let navTop = nav.offsetTop;

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})
function stickyNav() {
    if (window.scrollY > 0) {    
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');    
    }
  }
  
  window.addEventListener('scroll', stickyNav);