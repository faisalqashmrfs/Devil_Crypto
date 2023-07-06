const toggleMenue = document.querySelector(".toggle-menue");
const linksNav = document.querySelector(".links-nav")
var linksItem = document.querySelectorAll(".links-list li a");

/*toggle menue in the navbar */
toggleMenue.onclick = function() {
    linksNav.classList.toggle("active")
}

window.onclick = function(e) {

    if (!e.target.matches(".toggle-menue")) {
        if(linksNav.classList.contains("active")) {
            linksNav.classList.remove("active")
        }
    }
}

linksNav.addEventListener('click', (e) => {
    e.stopPropagation();
})

/* add active class to list item when clicked on */
linksItem.forEach(li => {
    li.addEventListener('click', () => {
        resetLinks();
        li.classList.add("active");
    })
})

function resetLinks() {
    linksItem.forEach(li => {
        li.classList.remove("active")
    })
}

/* change the background of navbar on scrolling */
function changeBg() {
    const navbar = document.querySelector(".bh-nav");
    const scrollValue = window.scrollY;
    if (scrollValue < 150) {
        navbar.classList.remove("nav-bg-color")
    }else {
        navbar.classList.add("nav-bg-color")
    }
}

window.addEventListener('scroll', changeBg);