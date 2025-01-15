
let projectsOpen = false;
let educationsOpen = false;

function projectsDrop() {
    const projects = document.querySelector('.projects-container');
    const educations = document.querySelector('.educations-container');

    const arrow = document.querySelector(".projects-arrow");
    const currentRotation = arrow.style.transform;

    if (projectsOpen) {
        projects.style.display = "none";
        arrow.style.transform = 'rotate(0deg)';
        projectsOpen = false;
    }
    else {
        projects.style.display = "block";
        // educations.style.display = "none"
        arrow.style.transform = 'rotate(180deg)';
        projectsOpen = true;
    }
}

function educationsDrop() {
    const projects = document.querySelector('.projects-container');
    const educations = document.querySelector('.educations-container');

    const arrow = document.querySelector(".educations-arrow");
    const currentRotation = arrow.style.transform;

    if (educationsOpen) {
        educations.style.display = "none";
        arrow.style.transform = 'rotate(0deg)';
        educationsOpen = false;
    }
    else {
        educations.style.display = "block"
        // projects.style.display = "none";
        arrow.style.transform = 'rotate(180deg)';
        educationsOpen = true;
    }
}

// function toggleSection(sectionClass, arrowClass, isOpen, toggleFlag) {
//     const section = document.querySelector(`.${sectionClass}`);
//     const arrow = document.querySelector(`.${arrowClass}`);
    
//     // Hide or show the section
//     section.style.display = isOpen ? "none" : "block";

//     // Rotate the arrow
//     arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";

//     // Update the toggle flag
//     if (toggleFlag === 'projects') {
//         projectsOpen = !isOpen;
//         educationsOpen = false; // Close other sections
//         document.querySelector('.educations').style.display = "none";
//         document.querySelector('.educations-arrow').style.transform = "rotate(0deg)";
//     } else if (toggleFlag === 'educations') {
//         educationsOpen = !isOpen;
//         projectsOpen = false; // Close other sections
//         document.querySelector('.projects').style.display = "none";
//         document.querySelector('.projects-arrow').style.transform = "rotate(0deg)";
//     }
// }

// function projectsDrop() {
//     toggleSection('projects', 'projects-arrow', projectsOpen, 'projects');
// }

// function educationsDrop() {
//     toggleSection('educations', 'educations-arrow', educationsOpen, 'educations');
// }
