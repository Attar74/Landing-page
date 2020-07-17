/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navigation = document.querySelector('header nav ul#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * 
*/

/**
 * Begin Main Functions
 * 
*/

// build the nav
const navBuilder = () =>{
    let navUI = '';
    sections.forEach(section => {
        const sectionId = section.id;
        const sectionDataNav = section.dataset.nav;
        navUI += `<li><a class="menu__link" href="#${sectionId}">${sectionDataNav}</a></li>`;
    });
    navigation.innerHTML = navUI;
    navigation.style = "color:red";
}
navBuilder();


// Add class 'active' to section when near top of viewport

//get the offset of the section
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

//remove the active class
const removeActive = (condition,section)=> {
    if(!condition) {
        section.classList.remove('your-active-class');
        let style = "background-color:linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%);";
        section.style.cssText = style;
    }
}

//add the active class
const addActive = (condition, section) => {
    if(condition) {
        section.classList.add('your-active-class');
        let style = "background-color:rgba(136,150,171,1);";
        section.style.cssText = style;
    }
}; 

//implementing of setting the activitaion function 

const sectionActivitaion = () =>{
    sections.forEach(section => {
        const elementOffset = offset(section);
        const inviewport = () => elementOffset < 150 && elementOffset >= -480;
        removeActive(inviewport(),section);
        addActive(inviewport(),section);
    })
};

window.addEventListener('scroll',sectionActivitaion);

/**
 * End Main Functions
**/


