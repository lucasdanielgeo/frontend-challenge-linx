const setErrorMessage = (input, message) => {
    const inputBlock = input.parentElement
    const span = inputBlock.querySelector('span')
    span.innerHTML = message
    input.focus()
}

const cleanErrorMessage = input => {
    const inputBlock = input.parentElement
    const span = inputBlock.querySelector('span')
    span.innerHTML = ''
}

const validateEmail = input => {
    const regex = /\S+@\S+\.\S+/
    const isValid = regex.test(input.value)
    return isValid
}