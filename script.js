const $optionsMenuLeft = document.querySelectorAll('.menu__link')
const $input = document.querySelector('.content__search')
const $SearchButton = document.querySelector(".buttons_button.search")

$optionsMenuLeft.forEach(option => {
    option.addEventListener('click',event => {
        if($optionsMenuLeft[0].classList.contains('active')){
            $optionsMenuLeft[0].classList.remove('active')
        }
        if($optionsMenuLeft[1].classList.contains('active')){
            $optionsMenuLeft[1].classList.remove('active')
        }

        event.target.classList.add('active')
    })
})

window.addEventListener('keyup', event => {
    if (event.code === 'NumpadEnter' || event.code === 'Enter'){
        search()
    }
});

$SearchButton.addEventListener('click',() => {
    search()
})

function search( ){
    let search = $input.value;
    location.href =`https://www.google.com/search?q=${search}`
}