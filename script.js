const questionImg = document.querySelectorAll('.question-img');

questionImg.forEach(event => {
    event.addEventListener('click', clickEvent => {
        event.classList.toggle('font-weight-700');
        event.children[0].classList.toggle('upside-down');
        console.log(event.nextElementSibling)
        event.nextElementSibling.classList.toggle('display-block');
    })
})