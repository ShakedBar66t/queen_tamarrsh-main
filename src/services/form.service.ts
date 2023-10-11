
// * Modules
import axios from 'axios'

// * Types
import { Form } from '@/shared/types'

const ADMIN_EMAIL = '5225fe4f9d78b5b56c94f00a0523c973'

async function postForm(form: Form) {
    try {
        const url = `https://formsubmit.co/${ADMIN_EMAIL}`
        await axios.post(url, form, {
            headers: {
                Accept: 'application/json',
            }
        })
    } catch (err) {
        throw new Error('Request failed')
    }
}


function validateMobile(mobile: string) {
    const israeliMobileRegex = /^05\d\s?(-)?\d{2}\1?\d{2}\1?\d{3}$/
    const internationalMobileRegex = /^\+\d{1,3}\s?\d{1,14}(\s?\d{1,13})?$/
    return israeliMobileRegex.test(mobile) || internationalMobileRegex.test(mobile)
}

function validateEmail(email: string) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email)
}


function validateName(username: string) {
    return username.length > 0
}

function getEmptyForm() {
    return {
        user_name: '',
        user_email: '',
        phone_number: '',
        message: ''
    }
}


export const formService = {
    postForm,
    getEmptyForm,
    validateName,
    validateEmail,
    validateMobile
}