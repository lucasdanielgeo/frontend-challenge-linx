import {  cleanErrorMessage, setErrorMessage, validateEmail } from "./validateForms.js";

const newsletterForm = document.querySelector('[ data-js="newsletter-form" ]')
const friendName = newsletterForm.friendName
const friendEmail = newsletterForm.friendEmail

const checkNewsletterInputs = Event => {
    Event.preventDefault();
    const friendNameValue = newsletterForm.friendName.value.trim()
    const friendEmailValue = newsletterForm.friendEmail.value.trim()
    
    if (friendNameValue === '') {
        setErrorMessage(friendName, 'Preencha o nome do seu amigo!')
        return false
    } 
    cleanErrorMessage(friendName);
    
    if (friendEmailValue === '') {
        setErrorMessage(friendEmail, 'Preencha o email do seu amigo!')
        return false
    } else if (!validateEmail(friendEmail)) {
        setErrorMessage(friendEmail, 'Favor, preencher um email válido! Ex: mail@mail.com')
        return false
    } 
    cleanErrorMessage(friendEmail);
    newsletterForm.submit();
    window.location.href = "./email.html";
    
}

newsletterForm.addEventListener('submit', checkNewsletterInputs);
