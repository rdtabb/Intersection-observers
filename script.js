const header = document.querySelector('header')
const sectionOne = document.querySelector('.section')

const faders = document.querySelectorAll('.main')

const sectionOneOptions ={
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries, 
    sectionOneObserver
    ) { 
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('nav-scrolled')
        } else {
            header.classList.remove('nav-scrolled')
        }
    })

}, sectionOneOptions)

sectionOneObserver.observe(sectionOne);

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
}

const fadersObserver = new IntersectionObserver
(function(
    entries,
    fadersObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear')
            } else {
                entry.target.classList.remove('appear')
            }
        });
}, appearOptions);

faders.forEach(fader => {
    fadersObserver.observe(fader)
})