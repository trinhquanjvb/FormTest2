const inputs= document.querySelectorAll('input')



const btn= document.querySelector('.btn')

btn.addEventListener('click', () => {
    const list= []
    inputs.forEach((input => {
        if(input.checked) {
            value= input.nextElementSibling.innerText
            list.push(value.split())
        }
    }))
    console.log(list[0])
    alert(`\n sở thích là ${list}`)
})