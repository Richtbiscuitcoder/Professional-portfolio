


//modal button functions to open and close 
const modalOne = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('#modal');

closeModal.addEventListener('click', ()=>{
    modalOne.close();
})


// for the json info
const index = 0
function makeModalContent(url, title, description) {
    document.querySelector('.output').innerHTML = `
    <span>${title}</span>
    <p>${description}</p>
    <a rel="noopener" href="google.com" target="_blank"><i class="fa-solid fa-globe"></i>View Live</a>
    <a rel="noopener" href="${url}" target="_blank" title="github"><i class="fa-brands fa-github"></i>View on Github</a>
    <button class="close-btn close-modal">&#x2715; Close</button>
       `
}

fetch('index.json')
.then((response) => {
    return response.json()
}) .then((data) => {

data.projects.forEach(project => {
    document.querySelector('.grid-container').innerHTML += `
    <div class="project">
        <h3>${project.title}</h3>
        <img src=${project.image} alt="project image displayed with info about it" height="400px" width="400">
        <a rel="noopener" href="google.com" target="_blank"><i class="fa-solid fa-globe">-</i> View Live</a>
        <a rel="noopener" href="${project.url}" target="_blank" title="github"><i class="fa-brands fa-github">-</i>  View on Github</a>
        <button class="project-btn open-modal" id="${project.id}" title="button" data-title="${project.title}" data-id="${project.id}" data-description="${project.description}" data-image="${project.image}" data-url="${project.url}">Learn more</button>
    </div>
    `
})

document.querySelectorAll('.grid-container button').forEach(button => {
    button.addEventListener('click', (e) => {
        modalOne.showModal();
        makeModalContent(button.dataset.url, button.dataset.title, button.dataset.description)
    })
})
});

const hamburger = document.querySelector('.hamburger-menu');
function openNav() {
    hamburger.addEventListener('click', () => {
        navLinks.forEach(link => {
            link.style.visibility = 'visible';
        })
    })
}


const navLinks = document.querySelectorAll('.nav-links');
function toggleNav() {
    navLinks.forEach(link => {
        link.style.visibility = 'hidden';
    })
}


