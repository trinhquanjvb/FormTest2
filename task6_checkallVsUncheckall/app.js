const checkAll= document.querySelector('.checkAll')
const unCheckAll= document.querySelector('.unCheckAll')
const inputs = document.querySelectorAll('input')

checkAll.addEventListener('click', handleCheckAll)
unCheckAll.addEventListener('click', handleUnCheckAll)

function handleCheckAll() {
    inputs.forEach(input => {
        input.checked= true
    })
}

function handleUnCheckAll() {
    inputs.forEach(input => {
        input.checked= false
    })
}