import './style.css'
import { isValid } from './util'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const submitBtn = form.querySelector('#submit')


form.addEventListener('submit', formHandler)

function formHandler(event){
     event.preventDefault()
    if(isValid(input.value)){
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }
        submitBtn.disabled = true
        // req to server
        console.log('question', question )
        input.value = ''

    } 
}

