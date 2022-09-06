const btn= document.querySelector('.btn')
const male= document.querySelector('#male')
const female= document.querySelector('#female')

const data= [male, female]


handleRadio(data)
function handleRadio() {
    var value= ''

    data.forEach(element => {
        element.addEventListener('change', () => {
            data.forEach(element => {
                element.checked= false
            })
            element.checked= true
            value= element.nextElementSibling.innerText
        })
    })

    // if(value !== '')
    btn.addEventListener('click', () => {
            if(value !== '')
                alert(value)
        })
}
