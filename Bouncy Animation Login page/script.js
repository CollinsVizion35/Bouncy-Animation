//Observer

const sliderIns = document.querySelectorAll('.slide-in');
const jumpers = document.querySelectorAll('.jump-in');


const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver (function(entries,appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);


sliderIns.forEach(sliderIn => {
    appearOnScroll.observe(sliderIn);
});

jumpers.forEach(jumper => {
    appearOnScroll.observe(jumper);
});



// timeout
const main = document.querySelector('main');
const firstdot = document.querySelector('.first-dot');
const seconddot = document.querySelector('.second-dot');
const thirddot = document.querySelector('.third-dot');
const fourthdot = document.querySelector('.fourth-dot');
const fifthdot = document.querySelector('.fifth-dot');
const signInBox = document.querySelector('.sign-in-box');


setTimeout (() => {
    firstdot.style.visibility = 'hidden';
    seconddot.style.visibility = 'visible';
}, 999);

setTimeout (() => {
    seconddot.style.visibility = 'hidden';
    thirddot.style.visibility = 'visible';
}, 2199);

setTimeout (() => {
    fourthdot.style.visibility = 'visible';
    fourthdot.style.transform = 'scale(1)';
}, 2949);

setTimeout (() => {
    thirddot.style.visibility = 'hidden';
}, 2949);

setTimeout (() => {
    fourthdot.style.visibility = 'hidden';
}, 3399);

setTimeout (() => {
    fifthdot.style.visibility = 'visible';
}, 3399)

setTimeout (() => {
    main.style.display = 'none';
    signInBox.style.visibility = 'visible';
    signInBox.style.transform = 'scale(1)';
    signInBox.style.opacity = '1';
    signInBox.style.borderRadius = '0';
}, 3899)