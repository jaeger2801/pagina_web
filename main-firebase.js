import {newUser, logIn} from './firebase.js'

const buttonSignIn = document.getElementById('register-submit-button')
buttonSignIn.addEventListener('click', (e) => signUp(e))

const buttonLogIn = document.getElementById('login-submit-button')
buttonLogIn.addEventListener('click', (e) => logInForm(e))

function signUp(e) {
    e.preventDefault()
    const email = document.getElementById('registerEmailTittle')?.value
    const password = document.getElementById('registerPasswordTittle')?.value
    const name = document.getElementById('registerNameTittle')?.value

    newUser(email, password, name);
}

function logInForm(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmailTittle')?.value
    const password = document.getElementById('loginPasswordTittle')?.value

    logIn(email, password);
}