

const modalOne = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');


/*
openModal.addEventListener('click', ()=>{
    modalOne.showModal();
})

closeModal.addEventListener('click', ()=>{
    modalOne.close();
})
*/

let btns = document.querySelectorAll('button');

btns.forEach(function (e) {
    e.addEventListener('click', function(){
        modalOne.showModal();
    })
})

