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

const validateCPF = input => {
    const regex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
    const isValid = regex.test(input.value)
    return isValid
}


export {
    cleanErrorMessage,
    setErrorMessage,
    validateEmail,
    validateCPF
}