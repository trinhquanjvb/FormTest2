const input= document.querySelector('input')
input.addEventListener('click', () => {
    input.checked ? alert(`bạn vừa thích freetuts.net`)
    : alert(`bạn vùa bỏ thích freetuts.net`)
})