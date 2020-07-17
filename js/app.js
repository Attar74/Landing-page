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

const navigationBar = document.querySelector('header nav ul');
const AllSections = document.querySelectorAll('section');


/**
 * End Global Variables
 * 
*/

/**
 * Begin Main Functions
 * 
*/

// build the nav
AllSections.forEach(section => {
    const li = document.createElement('li');
    li.innerHTML = `<a href='#${section.id}' class="${section.id}">${section.dataset.nav}</a>`;
    navigationBar.append(li);
});
const linkStyle = "color : blue; text-decoration: none";
let allLinks = document.querySelectorAll('li a');
allLinks.forEach(link => {
    link.style = linkStyle;
});


// Add class 'active' to section when near top of viewport

//get the offset of the section
const offsetXY = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

//remove the active class
const removeActiveClass = (condition,section)=> {
    if(!condition) {
        section.classList.remove('your-active-class');
        let style = "background-color:linear-gradient(0deg, rgba(136,203,171,1) 0%, rgba(0,13,60,1) 100%);";
        section.style.cssText = style;
        let classNameOfa = section.id;
        let a = document.querySelector("ul li a."+classNameOfa);
        a.style = "color:blue; text-decoration:none";
    }
}

//add the active class
const addActiveClass = (condition, section) => {
    if(condition) {
        section.classList.add('your-active-class');
        let style = "background-color:rgba(136,150,171,1);";
        section.style.cssText = style;
        let classNameOfa = section.id;
        let a = document.querySelector("ul li a."+classNameOfa);
        a.style = "color:red; text-decoration:none;";
    }
}; 

//implementing of setting the activitaion function 

const isItActive = () =>{
    AllSections.forEach(section => {
        const elementOffset = offsetXY(section);
        const isItInView = () => elementOffset < 150 && elementOffset >= -480;
        removeActiveClass(isItInView(),section);
        addActiveClass(isItInView(),section);
    })
};

window.addEventListener('scroll',isItActive);

/**
 * End Main Functions
**/


