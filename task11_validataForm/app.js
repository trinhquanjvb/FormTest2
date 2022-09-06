const listInput=
    document.querySelectorAll('#username, #email, #phone, #password, #confirm')
const btn= document.querySelector('.btn')
const user= document.querySelector('#username')
const email= document.querySelector('#email')
const phone= document.querySelector('#phone')
const password= document.querySelector('#password')
const verify= document.querySelector('#confirm')

function showError(flag, content) {
    const formControl= flag.parentElement
    const lineErorr= flag.nextElementSibling
    
    formControl.classList.add('error')
    lineErorr.innerText= content
}

function removeShowError(flag) {
    const formControl= flag.parentElement
    const lineErorr= flag.nextElementSibling

    formControl.classList.remove('error')
    lineErorr.innerText= ''
}

function app() {
    btn.addEventListener('click', handleClick)

    function handleClick(e) {
        e.preventDefault()
        
        listInput.forEach((element, i) => {
            if(element.value.trim() === '') {
                const id= element.id
                showError(element, `${id} is require`)
            } else {
                checkLengthUser(user)
                checkEmail(email)
                checkPhoneNumber(phone)
                checkPassWord(password)
                confirmPassword(verify, password)
            }
        })
    }
} app()

// check name user
function checkLengthUser(user) {
    const value= user.value.trim()
    if(!(value.length > 8 && value.length < 20)) {
        showError(user, 'User require more than 8 character or by')
    } else {
        removeShowError(user)
    }
}

// check account email
function checkEmail(email) {
    const regex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const isEmail= regex.test(email.value.trim())

    if(!isEmail) {
        showError(email, 'Your email is invalid')
    } else {
        removeShowError(email)
    }
}

// check phone number
function checkPhoneNumber(phone) {
    const regex=  /^[0-9]{10}$/
    const isPhoneNumber= regex.test(email.value.trim())

    if(!isPhoneNumber) {
        showError(phone, 'Your phone number is invalid')
    } else {
        removeShowError(phone)
    }
}

// check password
function checkPassWord(password) {
    const value= password.value.trim()
    
    !(value.length > 8) ? showError(password, 'Password require more than 8 character or by') 
        : removeShowError(password) 
}

// confirm password
function confirmPassword(verify, password) {
    const value= verify.value.trim()
    const value2= password.value.trim()

    !(value === value2 && value.length > 8) ? showError(verify, 'Your password do not match') 
        : removeShowError(verify)
}