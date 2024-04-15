

const modalOne = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');

/*
openModals.forEach(function (openModal) {
    openModal.addEventListener('click', openModal)
    }
})
*/

openModal.addEventListener('click', ()=>{
    modalOne.showModal();
})

closeModal.addEventListener('click', ()=>{
    modalOne.close();
})

/*
const buttons = document.querySelectorAll('.open-modal');

buttons.forEach(function (i) {
    i.addEventListener('click', openModal(){
        document.querySelector('???modal???').innerHTML = ${} ${} ${}
    }
})
*/ 