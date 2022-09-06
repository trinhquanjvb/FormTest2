const checked= document.querySelector('.btn-checked')
const unchecked= document.querySelector('.btn-unchecked')
const input= document.querySelector('input')

checked.addEventListener('click', handleClick)
unchecked.addEventListener('click', handleClick)

function handleClick() {
    input.checked ? input.checked= false : input.checked= true
}

