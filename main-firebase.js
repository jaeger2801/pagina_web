import {AddTaskLogin, AddTaskRegister} from './firebase.js'

const loginButton = document.getElementById('login-submit-button')
loginButton.addEventListener('click', (e) => clickFormLogin(e))

const registerButton = document.getElementById('register-submit-button')
registerButton.addEventListener('click', (e) =>  clickFormRegister(e))


function clickFormLogin(e){
    e.preventDefault()
    console.log('prevent event');
    const username = document.getElementById('loginNameTittle').value
    const password = document.getElementById('loginPasswordTittle').value

    AddTaskLogin(username, password);
}

function clickFormRegister(e){
    e.preventDefault()
    console.log('hola?');
    const nombre = document.getElementById('registerNameTittle').value
    const correo = document.getElementById('registerPasswordTittle').value
    const contraseña = document.getElementById('registerEmailTittle').value

    AddTaskRegister(nombre, correo, contraseña);
}