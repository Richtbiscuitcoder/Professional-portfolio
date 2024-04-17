
//modal button functions to open and close 
const modalOne = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('#modal');





closeModal.addEventListener('click', ()=>{
    modalOne.close();
})


// for the json info
const index = 0
function makeModalContent(image, title, description) {
    document.querySelector('.output').innerHTML = `
    <li>${image}</li>
    <li>${title}</li>
    <li>${description}</li>
    <button class="close-btn close-modal">&#x2715; Close</button>
    
    `
}

fetch('index.json')
.then((response) => {
    return response.json()
}) .then((data) => {

data.projects.forEach(project => {
    document.querySelector('.grid-container').innerHTML += `
    <div class="project-${project.id}">
        <h3>${project.title}</h3>
        <img src=${project.image}>
        <a rel="noopener" href="${project.url}" target="_blank" title="github"><i class="fa-brands fa-github"></i>  view on Github</a>
        <button class="project-btn open-modal" id="${project.id}" title="button" data-title="${project.title}" data-id="${project.id}" data-description="${project.description}" data-image="${project.image}" data-url="${project.url}">Learn more</button>
    </div>
    `
})

document.querySelectorAll('.grid-container button').forEach(button => {
    button.addEventListener('click', (e) => {
        modalOne.showModal();
        makeModalContent(button.dataset.image, button.dataset.title, button.dataset.description)
    })


})
})

 


    